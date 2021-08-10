import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { Map } from '../../../objects/map';
import { MapSelectionMode } from '../../../objects/enums/map-selection-mode';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AccountsService } from 'src/app/backend/clients';
import  * as data from  '../../../objects/location-json/json/countries.json';
import {ModalService} from '../../../services/modal.service';

@Component({
  selector: 'map-filter',
  templateUrl: './map-filter.page.html',
  styleUrls: ['./map-filter.page.scss'],
})
export class MapFilterPage {
  private map: Map;
  public selectionMode: MapSelectionMode = MapSelectionMode.FILTER;
  public filter = '';
  public selectedLocation: string;

  
  data: any;
  country: any;
  searchTerm: any;
  filterTerm: string;
  countries = (data as any).default;
  mapvalue: any;
  hide: boolean;

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private accountService: AccountsService,
    private zone: NgZone,
    public myservice: ModalService,
    private navParams: NavParams
  ) {
    this.hide = false;
  }

  dataas(data) {
    this.hide = false;
    this.map.zoomToLocation(data.id);
  }

  searchvalue() {
    this.hide = true;
    this.mapvalue = this.filterTerm;
    this.map.zoomToLocation(this.mapvalue);
  }

  async ionViewWillEnter() {
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, 'filter-map');

    this.filter = this.navParams.data.filter;

    let userLocations;
    if (this.navParams.data.userLocations) {
      userLocations = JSON.parse(this.navParams.data.userLocations);
    } else {
      userLocations = this.accountService.storedUserLocations;
    }

    const loading = await this.loadingController.create({
      // duration: 2000,
    });

    await loading.present();

    this.zone.run(() => {
      userLocations.forEach(location => {
        this.map.changeVisitStatus(location.fkLocation.locationCode, location.status, true);
      });
    });
    loading.dismiss();
  }

  show(e) {
    this.myservice.dis = e;
  }

  async ionViewWillLeave() {
    this.filter = '';
    await this.closeModal();
  }

  async resetFilter() {
    this.filter = '';
    await this.closeModal();
  }

  async filterSubmit() {
    if (this.map.selectedArr.length > 0) {
      this.filter = this.map.changedAreas[0].locationId;
    }
    await this.closeModal();
  }

  async closeModal() {
    const loading = await this.loadingController.create({
      // duration: 2000,
    });
    const onClosedData = this.filter;
    this.map.destroyMap();
    await this.modalController.dismiss(onClosedData);
  }
}
