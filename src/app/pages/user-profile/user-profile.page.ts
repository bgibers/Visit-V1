import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Map } from '../../objects/map';
import { MapSelectionMode } from '../../objects/enums/map-selection-mode';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { UserTimelinePage } from '../user-timeline/user-timeline.page';
import { UserService } from '../../backend/clients/api/user.service';
import { AccountsService } from '../../backend/clients/api/accounts.service';
import { UserResponse } from '../../backend/clients/model/userResponse';
import { take, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements AfterViewInit {

  public userId = undefined;
  public selectionMode: MapSelectionMode = MapSelectionMode.NONE;
  public user: BehaviorSubject<UserResponse> = new BehaviorSubject({});
  private map: Map;

  constructor(
      public modalController: ModalController,
      private userService: UserService,
      private accountService: AccountsService,
      private zone: NgZone,
      private route: ActivatedRoute,
      private router: Router) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userId = this.router.getCurrentNavigation().extras.state.userId;
        console.log(this.router.getCurrentNavigation().extras.state.userId)
      }
    });
    this.map = Map.getInstance(this.zone);
  }

  ionViewWillEnter() {
    console.log(this.userId)
    if (this.userId === undefined) {
      const token = this.accountService.getToken().value;
      this.userId = token.id;
    } 
    this.userService.userGetIdGet(this.userId).pipe(take(1)).subscribe(user => {
      this.user.next(user);
      if (this.user.value.avi === undefined) {
        this.user.value.avi = '../../../assets/defaultuser.png';
      }

      // todo make the initializer accept an array
      user.userLocations.forEach(location => {
        this.map.changeVisitStatus(location.fkLocation.locationCode, location.status);
      });
    });
  }

  ngAfterViewInit() {
    this.map.addMapToDiv(this.selectionMode, 'user-map');
  }

  async presentSearchModal() {
    const modal = await this.modalController.create({
      component: SearchPage,
      showBackdrop: true,
      cssClass: 'search-modal'
    });
    return await modal.present();
  }

  async presentUserTimeline() {
    const modal = await this.modalController.create({
      component: UserTimelinePage,
      showBackdrop: true,
      cssClass: 'user-profile'
    });
    return await modal.present();
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
