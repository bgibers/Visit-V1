import { Component, OnInit, NgZone, Input, OnDestroy } from '@angular/core';
import { Map } from '../../objects/map';
import { MapSelectionMode } from '../../objects/enums/map-selection-mode';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @Input() selectionMode: MapSelectionMode = MapSelectionMode.NONE;
  @Input() customStyle: {};

  private map: Map;

  constructor( private zone: NgZone) { }

   ngOnInit() {
    console.log('onInit');
    this.map = new Map(this.zone);
    this.map.createMap('map', this.selectionMode);
  }

  async ionViewWillEnter() {
    console.log('Enter');
  }

  ngOnDestroy() {
    this.map.destroyMap();
  }

  onLoad() {
    console.log('OnLoad');
    // this.futureCount = 0;
    // this.visitedCount = 0;
    // for (const obj of this.userLocations.value) {
    //    let status: string;
    //    if (obj.visited === 1) {
    //      status = 'visited';
    //      this.visitedCount++;
    //    } else if (obj.toVisit === 1) {
    //      status = 'toVisit';
    //      this.futureCount++;
    //    }
    //    console.log(obj.visited);
    //    this.map.changeVisitStatus(obj.locationId, status);
    //  }
   }
}
