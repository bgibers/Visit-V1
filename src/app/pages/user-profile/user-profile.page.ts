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
import { BehaviorSubject, Observable } from 'rxjs';
import {ModalService} from '../../services/modal.service';
import { UserSettingsPage } from '../user-settings/user-settings.page';
// import { IonicS}
import { Storage } from '@ionic/storage';

import  * as data from  '../../objects/location-json/json/countries.json';

// import { Ng2SearchPipe } from 'ng2-search-filter';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage {

  public userId: string = undefined;
  public selectionMode: MapSelectionMode = MapSelectionMode.NONE;
  public user: BehaviorSubject<UserResponse> = new BehaviorSubject({});
  public canEditProfile = false;
  public toVisitCount = 0;
  public visitedCount = 0;
  public visitedPercent = 0;
  private map: Map;



  data: any;
  country: any;
  searchTerm: any;
  filterTerm: string;
  countries = (data as any).default;
  mapvalue: any;
  hide: boolean;
    // console.log(countries);
    // country = countries.Countries;
  constructor(
      // public ng2:Ng2SearchPipe,
      public modalController: ModalController,
      public loadingController: LoadingController,
      private userService: UserService,
      private accountService: AccountsService,
      private zone: NgZone,
      private route: ActivatedRoute,
      public myservice: ModalService,
      private router: Router, private storage: Storage) {
        this.hide = false;
        console.log(this.countries.Countries);
        this.ionViewDidEnter();
        this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userId = this.router.getCurrentNavigation().extras.state.userId;
      }
    });
  }

  // 405 locations. 355 non US
  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      // duration: 9000
    });
    await loading.present();
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, 'user-map');

    if (this.userId === undefined) {
      this.userId = this.accountService.getUserId();
    }

    this.zone.run(() => {
      this.getUser(loading).pipe(take(1)).subscribe(() => {
        // loading.dismiss();
      });
    });

  }

  getUser(loading: HTMLIonLoadingElement): Observable<any> {
    return this.userService.userIdGet(this.userId).pipe(map(user => {
      this.storage.set('alluser', user);
      console.log(user);
      if (this.accountService.getUserId() === this.userId) {
        this.canEditProfile = true;
        this.storage.set('alluser', user);
      }

      this.user.next(user);
      if (this.user.value.avi === undefined) {
        this.user.value.avi = '../../../assets/defaultuser.png';
        this.storage.set('alluser', user);
        console.log(user);
      }

      const usVisitedCount = 0;
      this.visitedCount = 0;
      this.visitedPercent = 0;
      this.toVisitCount = 0;

      user.userLocations.forEach(location => {
        this.map.changeVisitStatus(location.fkLocation.locationCode, location.status);
        console.log(location.fkLocation.locationCode, location.status);

        if (location.status === 'toVisit') {
          this.toVisitCount++;
        } else {
          if (location.fkLocation.locationCountry === 'United State of America') {

          }
          this.visitedCount++;
        }
      });
      const countryCount = this.visitedCount - usVisitedCount;

      this.visitedPercent = ((countryCount / 405) + (usVisitedCount / 355)) * 100;

      loading.dismiss();
    }));
  }

  searchvalue() {
    this.hide = true;
    this.mapvalue = this.filterTerm;
    this.map.zoomToLocation(this.mapvalue);
  }

  dataas(data) {
    this.hide = false;
    this.map.zoomToLocation(data.id);
  }
  setFilteredItems() {
    // for(var i= 0;this.country.legth;i++){
    //   if(this.country[i]){
    //     console.log(this.country[i].name);
        return this.country.filter(item => {
          return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
          console.log( item);
        });
  }

  ionViewWillLeave() {
    this.canEditProfile = false;
    this.map.destroyMap();
    console.log(this.map);
    this.toVisitCount = 0;
    this.visitedCount = 0;
    this.visitedPercent = 0;
  }


  async presentSearchModal() {
    this.router.navigateByUrl('/search');
    // const modal = await this.modalController.create({
    //   component: SearchPage,
    //   showBackdrop: true,
    //   cssClass: 'search-modal'
    // });

    // modal.onDidDismiss().then(async (returned) => {
    //   if (returned !== null) {
    //     const loading = await this.loadingController.create({
    //       duration: 2000
    //     });
    //     await loading.present();
    //     this.userId = returned.data;
    //     this.getUser(loading);
    //   }
    // });

    // return await modal.present();
  }

  async presentUserTimeline() {
    const modal = await this.modalController.create({
      component: UserTimelinePage,
      showBackdrop: true,
      cssClass: 'user-profile',
      componentProps: {
        userId: this.userId,
        userLocations: JSON.stringify(this.user.value.userLocations)
      }
    });

    modal.onDidDismiss().then(async (returned) => {
      this.ionViewDidEnter();
    });

    return await modal.present();
  }

  show(e) {
    console.log(e);
    this.myservice.dis = e;
    console.log(this.myservice.dis);
  }

  async presentUserSettings() {
    console.log(this.user.value);
    this.router.navigate(['user-settings', this.user.value]);
    // const modal = await this.modalController.create({
    //   component: UserSettingsPage,
    //   showBackdrop: true,
    //   cssClass: 'user-setttings',
    //   componentProps: {
    //     user: this.user.value
    //   }
    // });
    // return await modal.present();
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
