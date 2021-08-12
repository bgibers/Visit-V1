import { Component, Input, NgZone } from '@angular/core';
import { AccountsService, MarkLocationsRequest, UserLocation } from 'src/app/backend/clients';
import { MapSelectionMode } from 'src/app/objects/enums/map-selection-mode';
import { Map } from 'src/app/objects/map';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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
  public userLocations: UserLocation[];
  constructor(
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    private zone: NgZone,
    private storage: Storage,
    private accountService: AccountsService
  ) {}

  async ionViewWillEnter() {
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, 'mark-map');

    if (this.selectionMode === MapSelectionMode.TO_VISIT) {
      this.displayVisitedText = false;
    }

    const loading = await this.loadingController.create({
      duration: 2000,
    });

    await loading.present();

    this.storage.get('userLocations').then(res => {
      this.userLocations = res;
      this.userLocations.forEach(location => {
        this.map.changeVisitStatus(location.fkLocation.locationCode, location.status, true);
      });
      loading.dismiss();
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
}
