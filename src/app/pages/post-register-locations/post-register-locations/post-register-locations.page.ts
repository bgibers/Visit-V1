import { Component, OnInit, NgZone } from '@angular/core';
import { Map } from '../../../objects/map';
import { MapSelectionMode } from 'src/app/objects/enums/map-selection-mode';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'post-register-locations',
  templateUrl: './post-register-locations.page.html',
  styleUrls: ['./post-register-locations.page.scss'],
})
export class PostRegisterLocationsPage implements OnInit {
  public selectionMode: MapSelectionMode = MapSelectionMode.VISITED;
  public titleTextVisited = 'Where have you visited?';
  public titleTextToVisit = 'Bucketlist';
  public subtitleTextVisited = `We'll get to where you want to go in a moment,
  but first let\'s show your friends (and yourself) where you've been!`;
  public subtitleTextToVisit = `Mark down every and any place you find interesting and want to checkout someday, let's make it happen!`;
  public displayVisitedText = true;
  private map: Map;
  constructor(public router: Router,
              private zone: NgZone,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.map = new Map(this.zone);
    this.map.createMap('register-map', this.selectionMode);
  }

  switchMode() {
    this.map.zoomHome();
    if (this.selectionMode === MapSelectionMode.VISITED) {
      this.map.setSelectionMode(MapSelectionMode.TO_VISIT);
      this.displayVisitedText = false;
      this.selectionMode = MapSelectionMode.TO_VISIT;
    } else {
      this.map.setSelectionMode(MapSelectionMode.VISITED);
      this.displayVisitedText = true;
      this.selectionMode = MapSelectionMode.VISITED;
    }
  }

  onSubmit(values) {
    console.log(values);
    const navigationExtras: NavigationExtras = {
      replaceUrl: false,
      state: {
        userName: 'tester'
      }
    };
    this.router.navigateByUrl('/tab1', navigationExtras);
  }

}
