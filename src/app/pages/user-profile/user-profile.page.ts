import { Component, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Map } from '../../objects/map';
import { MapSelectionMode } from '../../objects/enums/map-selection-mode';
import { ModalController, LoadingController } from '@ionic/angular';
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
export class UserProfilePage {

  public userId = undefined;
  public selectionMode: MapSelectionMode = MapSelectionMode.NONE;
  public user: BehaviorSubject<UserResponse> = new BehaviorSubject({});
  public canEditProfile = false;
  private map: Map;

  constructor(
      public modalController: ModalController,
      public loadingController: LoadingController,
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
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, 'user-map');

    if (this.userId === undefined) {
      const token = this.accountService.getToken().value;
      this.userId = token.id;
    }

    this.getUser(loading);
  }

  getUser(loading: HTMLIonLoadingElement) {
    this.userService.userGetIdGet(this.userId).pipe(take(1)).subscribe(user => {
      if (this.accountService.getToken().value.id === this.userId) {
        this.canEditProfile = true;
      }

      this.user.next(user);
      loading.dismiss();
      if (this.user.value.avi === undefined) {
        this.user.value.avi = '../../../assets/defaultuser.png';
      }

      // todo make the initializer accept an array
      user.userLocations.forEach(location => {
        this.map.changeVisitStatus(location.fkLocation.locationCode, location.status);
      });
    });
  }

  ionViewDidLeave() {
    this.canEditProfile = false;
    this.map.destroyMap();
  }


  async presentSearchModal() {
    const modal = await this.modalController.create({
      component: SearchPage,
      showBackdrop: true,
      cssClass: 'search-modal'
    });

    modal.onDidDismiss().then(async (returned) => {
      if (returned !== null) {
        const loading = await this.loadingController.create({
          duration: 2000
        });
        await loading.present();
        console.log(returned.data)
        this.userId = returned.data;
        this.getUser(loading);
      }
    });

    return await modal.present();
  }

  async presentUserTimeline() {
    const modal = await this.modalController.create({
      component: UserTimelinePage,
      showBackdrop: true,
      cssClass: 'user-profile',
      componentProps: {
        userId: this.userId
      }
    });
    return await modal.present();
  }

  async logout() {
    await this.accountService.logout();
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
