import { Component, Input, NgZone } from '@angular/core';
import { AccountsService, MarkLocationsRequest, UserLocation } from 'src/app/backend/clients';
import { MapSelectionMode } from 'src/app/objects/enums/map-selection-mode';
import { Map } from 'src/app/objects/map';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import * as data from '../../objects/location-json/json/countries.json';
import * as statesData from '../../objects/location-json/json/states.json';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'mark-location',
  templateUrl: './mark-location.page.html',
  styleUrls: ['./mark-location.page.scss'],
})
export class MarkLocationPage {
  // Data passed in by componentProps
  @Input() selectionMode: MapSelectionMode;
  public locationRequest = {
    locations: {},
  } as MarkLocationsRequest;
  private map: Map;
  public titleTextVisited = 'Where have you visited?';
  public titleTextToVisit = 'Bucketlist';
  public subtitleTextVisited = `Show your friends (and yourself) where you've been!`;
  public subtitleTextToVisit = `Mark down every and any place you find interesting and want to checkout someday, let's make it happen!`;
  public displayVisitedText = true;
  countries = (data as any).default;
  states = (statesData as any).default;
  hide: boolean;
  mapvalue: any;
  country: any;
  searchTerm: any;
  filterTerm: string;

  public userLocations: UserLocation[];
  constructor(
    public searchLocations: ModalService,
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private zone: NgZone,
    private storage: Storage,
    private accountService: AccountsService,
    
    private navParams: NavParams
  ) {
  }

  async ionViewWillEnter() {
    this.storage.get('userLocations').then(res => {
      this.userLocations = JSON.parse(res);
    });

    await this.setUpMap().then(async () => {
      const loading = await this.loadingController.create({
        duration: 2000,
      });

      if (this.selectionMode === MapSelectionMode.TO_VISIT) {
        this.displayVisitedText = false;
      }


      await loading.present();

      this.userLocations.forEach(location => {
        this.map.changeVisitStatus(location.fkLocation.locationCode, location.status, true);
      });

      loading.dismiss();
    });
  }

  setUpMap() {
    return new Promise((resolve, reject) => {
      this.map = new Map(this.zone);
      this.map.addMapToDiv(this.selectionMode, 'mark-map');

      resolve('');
    });
  }

  ionViewDidLeave() {
    this.map.destroyMap();
  }

  mapLocationsToRequest() {
    this.map.changedAreas.forEach((location) => {
      this.locationRequest.locations[location.locationId] = location.status;
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }

  onSubmit() {
    this.mapLocationsToRequest();
    this.accountService
      .accountUpdateLocationsPost(this.locationRequest)
      .pipe(take(1))
      .subscribe(
        (res) => {
          this.dismiss();
        }
        // (error) => {
        //   this.hasError = true;
        //   this.error = 'An unexpected error has occurred.';
        // }
      );
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
      return this.country.filter(item => {
        return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
  }

  show(e) {
    this.searchLocations.dis = e;
  }
}
