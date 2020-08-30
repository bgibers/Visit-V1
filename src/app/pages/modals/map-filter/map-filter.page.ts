import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { Map } from '../../../objects/map';
import { MapSelectionMode } from '../../../objects/enums/map-selection-mode';

@Component({
  selector: 'map-filter',
  templateUrl: './map-filter.page.html',
  styleUrls: ['./map-filter.page.scss'],
})
export class MapFilterPage implements AfterViewInit {
  private map: Map;
  public selectionMode: MapSelectionMode = MapSelectionMode.NONE;
  constructor(private zone: NgZone) {
    this.map = Map.getInstance(this.zone);
  }

  ngAfterViewInit() {
    this.map.addMapToDiv(this.selectionMode, 'filter-map');
  }

}
