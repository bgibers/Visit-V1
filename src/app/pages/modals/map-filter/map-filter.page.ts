import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { Map } from '../../../objects/map';
import { MapSelectionMode } from '../../../objects/enums/map-selection-mode';

@Component({
  selector: 'map-filter',
  templateUrl: './map-filter.page.html',
  styleUrls: ['./map-filter.page.scss'],
})
export class MapFilterPage {
  private map: Map;
  public selectionMode: MapSelectionMode = MapSelectionMode.NONE;
  constructor(private zone: NgZone) {
  }

  ionViewWillEnter() {
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, 'filter-map');
  }

  ionViewWillLeave() {
    this.map.destroyMap();
  }
}
