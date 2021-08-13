import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { Map } from '../../objects/map';
import { MapSelectionMode } from 'src/app/objects/enums/map-selection-mode';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { JwtToken, AccountsService } from 'src/app/backend/clients';
import { MarkLocationsRequest } from 'src/app/backend/clients/model/markLocationsRequest';
import { take } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';
import * as data from '../../objects/location-json/json/countries.json';
import * as statesData from '../../objects/location-json/json/states.json';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'post-register-locations',
  templateUrl: './post-register-locations.page.html',
  styleUrls: ['./post-register-locations.page.scss'],
})
export class PostRegisterLocationsPage {
  public selectionMode: MapSelectionMode = MapSelectionMode.VISITED;
  public titleTextVisited = 'Where have you visited?';
  public titleTextToVisit = 'Bucketlist';
  public subtitleTextVisited = `We'll get to where you want to go in a moment,
  but first let\'s show your friends (and yourself) where you've been!`;
  public subtitleTextToVisit = `Mark down every and any place you find interesting and want to checkout someday, let's make it happen!`;
  public displayVisitedText = true;
  public token: JwtToken;
  public locationRequest = {
    locations: {},
    registration: true
  } as MarkLocationsRequest;
  private map: Map;
  hasError = false;
  error = '';
  countries = (data as any).default;
  states = (statesData as any).default;
  hide: boolean;
  mapvalue: any;
  country: any;
  searchTerm: any;
  filterTerm: string;

  constructor(
    public router: Router,
    public searchLocations: ModalService,
    public loadingController: LoadingController,
    private accountService: AccountsService,
    private zone: NgZone,
    private route: ActivatedRoute
  ) {}

  async ionViewDidEnter() {
    const loading = await this.loadingController.create({
      // duration: 9000
    });
    await loading.present();
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, 'register-map');
    loading.dismiss();
  }

  ionViewDidLeave() {
    this.map.destroyMap();
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

  mapLocationsToRequest() {
    this.map.selectedArr.forEach((location) => {
      this.locationRequest.locations[location.locationId] = location.status;
    });
  }

  onSubmit() {
    this.mapLocationsToRequest();
    this.accountService
      .accountUpdateLocationsPost(this.locationRequest)
      .pipe(take(1))
      .subscribe(
        (res) => {
          const navigationExtras: NavigationExtras = {
            replaceUrl: false
          };
          this.zone.run(() => {
            this.router.navigateByUrl('/tab1', navigationExtras);
          });
        },
        (error) => {
          this.hasError = true;
          this.error = 'An unexpected error has occurred.';
        }
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
