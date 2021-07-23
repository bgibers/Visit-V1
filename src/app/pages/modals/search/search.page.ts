import { Component, NgZone, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserService } from 'src/app/backend/clients';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { SlimUserResponse } from 'src/app/backend/clients/model/slimUserResponse';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  data: any;
  constructor(
    public viewCtrl: ModalController,
    public userService: UserService,
    private zone: NgZone,
    private router: Router
  ) {
    this.ngOnInit();
  }

  people: BehaviorSubject<SlimUserResponse[]> = new BehaviorSubject([]);
  searchQuery = '';

  ngOnInit() {
    // fetch('./app/objects/location-json/json/countries.json').then(res => res.json())
    // .then(json => {
    //   this.data = json;
    //   console.log(json);
    // });
  
  }

  search() {
    this.userService
      .userSearchQueryGet(this.searchQuery)
      .pipe(take(1))
      .subscribe((users) => {
        this.people.next(users);
      });
  }

  goToProfile(user: SlimUserResponse) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      skipLocationChange: true,
      state: {
        userId: user.id,
      },
    };
    const onClosedData = user.id;
    this.viewCtrl.dismiss(onClosedData);
    this.zone.run(() => {
      this.router.navigateByUrl('/user-profile', navigationExtras);
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
