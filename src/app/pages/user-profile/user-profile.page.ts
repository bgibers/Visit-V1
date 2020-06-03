import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Map } from '../../objects/map';
import { MapSelectionMode } from '../../objects/enums/map-selection-mode';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit, OnDestroy {

  username: string;
  private map: Map;
  public selectionMode: MapSelectionMode = MapSelectionMode.NONE;

  constructor(
      private zone: NgZone,
      private route: ActivatedRoute,
      private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.username = this.router.getCurrentNavigation().extras.state.userName;
      }
    });
  }

  async ngOnInit() {
    console.log('onInit');
    this.map = new Map(this.zone);
    await this.map.createMap('user-map', this.selectionMode);
  }

  ngOnDestroy() {
    this.map.destroyMap();
  }


  // stop() {
  //   if (this.timerHandler) {
  //     window.clearInterval(this.timerHandler);
  //     this.timerHandler = 0;
  //   }
  // }

  // start() {
  //   this.stop();
  //   this.progress = 0;
  //   this.progressText = "Started";
  //   this.timerHandler = window.setInterval(() => {
  //     this.progress += Math.random() * 5;
  //     if (this.progress >= 50) {
  //       this.progressText = "Please stay tuned.";
  //     }
  //     if (this.progress >= 100) {
  //       this.progress = 100;
  //       this.progressText = "Complete"
  //       this.stop();
  //     }
  //   }, 100);
  // }

}
