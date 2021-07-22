import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { Map } from '../../objects/map';
import { MapSelectionMode } from 'src/app/objects/enums/map-selection-mode';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { JwtToken, AccountsService } from 'src/app/backend/clients';
import { MarkLocationsRequest } from 'src/app/backend/clients/model/markLocationsRequest';
import { take } from 'rxjs/operators';

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

  constructor(
    public router: Router,
    private accountService: AccountsService,
    private zone: NgZone,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter() {
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, 'register-map');
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
}
