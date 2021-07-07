import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  Injectable,
} from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import worldLow from '@amcharts/amcharts4-geodata/worldLow';
import am4geodata_usaLow from '@amcharts/amcharts4-geodata/usaLow';
// import am4geodata_canadaLow from '@amcharts/amcharts4-geodata/canadaLow';
// import am4geodata_russiaLow from '@amcharts/amcharts4-geodata/russiaLow';
import { MapSelectionMode } from './enums/map-selection-mode';

@Injectable()
export class Map {
  public selectedArr: Array<{
    locationId: string;
    status: string;
  }>;

  public changedAreas: Array<{
    locationId: string;
    status: string;
  }>;

  private chart: am4maps.MapChart;
  private polygonArr: Array<am4maps.MapPolygon>;
  private seriesArr: Array<am4maps.MapPolygonSeries>;
  private selectedArea: am4maps.MapPolygon;
  private selectionMode: MapSelectionMode;
  private lastSelected: am4maps.MapPolygon;
  private name: string;
  private id: any;

  constructor(private zone: NgZone) {
    this.destroyMap();
    this.selectedArea = new am4maps.MapPolygon();
    this.polygonArr = new Array<am4maps.MapPolygon>();
    this.selectedArr = new Array();
    this.changedAreas = new Array();
    this.seriesArr = new Array<am4maps.MapPolygonSeries>();
    this.createMap(MapSelectionMode.NONE);
    this.selectionMode = MapSelectionMode.NONE;
  }

  // static getInstance(zone: NgZone): Map {
  //   if (!Map.instance) {
  //     Map.instance = new Map(zone);
  //   }

  //   return Map.instance;
  // }

  get selectedId() {
    return this.id;
  }

  set selectedId(id) {
    this.id = id;
  }

  get selectedName() {
    return this.name;
  }

  set selectedName(name) {
    this.name = name;
  }

  async createMap(selectionMode: MapSelectionMode) {
    am4core.disposeAllCharts();
    this.zone.runOutsideAngular(() => {
      let worldSeries: am4maps.MapPolygonSeries;
      let usaSeries: am4maps.MapPolygonSeries;
      // let canadaSeries: am4maps.MapPolygonSeries;
      // let russiaSeries: am4maps.MapPolygonSeries;
      let chart: am4maps.MapChart;

      am4core.ready(() => {
        am4core.useTheme(am4themes_animated);
        am4core.options.autoDispose = true;

        // Create map instance
        chart = am4core.create(undefined, am4maps.MapChart);
        chart.geodata = worldLow;
        chart.projection = new am4maps.projections.Miller();
        chart.zoomControl = new am4maps.ZoomControl();
        chart.zoomControl.plusButton.hide();
        chart.zoomControl.minusButton.hide();
        chart.tapToActivate = true;
        chart.seriesContainer.events.disableType('doublehit');
        chart.chartContainer.background.events.disableType('doublehit');
        chart.showOnInit = true;
        // Home button
        const homeButton = new am4core.Button();
        homeButton.events.on('hit', () => {
          chart.goHome();
        });

        homeButton.icon = new am4core.Sprite();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 30;
        homeButton.icon.path =
          'M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8';
        homeButton.marginBottom = 10;
        homeButton.parent = chart.zoomControl;
        homeButton.insertAfter(chart.zoomControl.minusButton);

        // Series for World map
        worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.exclude = ['AQ'];
        worldSeries.useGeodata = true;
        this.seriesArr.push(worldSeries);
        this.polygonArr.push(worldSeries.mapPolygons.template);

        // Series for United States map
        usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
        usaSeries.geodata = am4geodata_usaLow;
        this.seriesArr.push(usaSeries);
        this.polygonArr.push(usaSeries.mapPolygons.template);

        // // Series for Canada map
        // canadaSeries = chart.series.push(new am4maps.MapPolygonSeries());
        // canadaSeries.geodata = am4geodata_canadaLow;
        // this.seriesArr.push(canadaSeries);
        // this.polygonArr.push(canadaSeries.mapPolygons.template);

        // // Series for Russia map
        // russiaSeries = chart.series.push(new am4maps.MapPolygonSeries());
        // russiaSeries.geodata = am4geodata_russiaLow;
        // this.seriesArr.push(russiaSeries);
        // this.polygonArr.push(russiaSeries.mapPolygons.template);
      });

      this.setupTemplates();
      this.setSelectionMode(selectionMode);
      this.chart = chart;
    });
  }

  addMapToDiv(selectionMode: MapSelectionMode, divName: string) {
    this.selectionMode = selectionMode;
    this.setSelectionMode(this.selectionMode);
    this.chart.moveHtmlContainer(divName);
  }

  setupTemplates() {
    this.polygonArr.forEach((polygonTemplate) => {
      polygonTemplate.tooltipText = '{name}';
      polygonTemplate.nonScalingStroke = true;
      polygonTemplate.applyOnClones = true;
      polygonTemplate.strokeOpacity = 0.5;

      const activeState = polygonTemplate.states.create('active');

      const visited = polygonTemplate.states.create('visited');
      visited.properties.fill = am4core.color('#128C7E');

      const toVisit = polygonTemplate.states.create('toVisit');
      toVisit.properties.fill = am4core.color('#F05E23');

      const filter = polygonTemplate.states.create('filter');
      filter.properties.fill = am4core.color('yellow');


      const defaultState = polygonTemplate.states.create('default');
      defaultState.properties.fill = am4core.color('#d9d9d9');

      polygonTemplate.events.on('hit', (ev) => {
        const data = ev.target.dataItem.dataContext as am4maps.MapPolygon;

        this.selectedArea = data;
        // this.selectedName = data.name;

        this.selectedId = data.id;

        if (this.lastSelected !== ev.target) {
          ev.target.series.chart.zoomToMapObject(ev.target);
          this.lastSelected = ev.target;
        }
      });
    });
  }

  setSelectionMode(selectionMode: MapSelectionMode) {
    this.selectionMode = selectionMode;
    // Allow only one location to be hightlighted at a time
    if (this.selectionMode === MapSelectionMode.FILTER) {
      this.polygonArr.forEach((polygonTemplate) => {
        polygonTemplate.events.on('doublehit', (ev) => {
          const data = ev.target.dataItem.dataContext as am4maps.MapPolygon;
          this.resetAllLocations();
          this.changeVisitStatus(data.id, 'filter');
        });
      });
    } else if (this.selectionMode !== MapSelectionMode.NONE) {
      this.polygonArr.forEach((polygonTemplate) => {
        polygonTemplate.events.off('doublehit');
        polygonTemplate.events.on('doublehit', (ev) => {
          const data = ev.target.dataItem.dataContext as am4maps.MapPolygon;
          if (this.selectionMode === MapSelectionMode.TO_VISIT) {
            this.changeVisitStatus(data.id, 'toVisit');
          } else {
            this.changeVisitStatus(data.id, 'visited');
          }
        });
      });
    }
  }

  zoomToLocation(locationId: string) {
    for (const series of this.seriesArr) {
      const result = series.getPolygonById(locationId);

      if (result !== undefined) {
        this.chart.zoomToMapObject(result);
        break;
      }
    }
  }

  zoomHome() {
    this.chart.goHome();
  }

  resetAllLocations() {
    this.changedAreas.forEach((location) => {
      for (const series of this.seriesArr) {
        const result = series.getPolygonById(location.locationId);
        if (result !== undefined) {
          result.setState('default');
        }
      }
    });
  }

  async changeVisitStatus(locationId: string, status: string, init: boolean = false) {
    for (const series of this.seriesArr) {
      const result = series.getPolygonById(locationId);

      if (result !== undefined) {
        this.selectedArea = result;
        break;
      }
    }

    const locationInArray = this.changedAreas.find(
      (d) => d.locationId === locationId
    );
    if (locationInArray !== undefined) {
      const index = this.changedAreas.indexOf(locationInArray, 0);
      if (index > -1) {
        this.changedAreas.splice(index, 1);
        if (status === 'filter') {
          this.selectedArea.setState('filter');
        } else {
          this.selectedArea.setState('default');
        }
      }
    } else {
      if (status === 'visited') {
        this.selectedArea.setState('visited');
      } else if (status === 'toVisit') {
        this.selectedArea.setState('toVisit');
      } else if (status === 'filter') {
        this.selectedArea.setState('filter');
      }
      this.selectedArr.push({ locationId, status });

      // if the map already had locations, do not add them to this array
      // this array is only the locations that have changed post initialization
      if (!init) {
        this.changedAreas.push({ locationId, status });
      }
    }

    // this.chart.reinit();
  }

  destroyMap() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
