import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { Map } from '../../../objects/map';
import { MapSelectionMode } from '../../../objects/enums/map-selection-mode';

@Component({
  selector: 'map-filter',
  templateUrl: './map-filter.page.html',
  styleUrls: ['./map-filter.page.scss'],
})
export class MapFilterPage implements OnInit, OnDestroy {
  private map: Map;
  public selectionMode: MapSelectionMode = MapSelectionMode.NONE;
  constructor(private zone: NgZone) { }

  ngOnInit() {
    console.log('onInit');
    this.map = new Map(this.zone);
    this.map.createMap('filter-map', this.selectionMode);
  }

  ngOnDestroy() {
    this.map.destroyMap();
  }

}
