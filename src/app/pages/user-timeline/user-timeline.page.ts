import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import {
  IonInfiniteScroll,
  LoadingController,
  ModalController,
  NavParams,
} from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { MapFilterPage } from '../modals/map-filter/map-filter.page';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AccountsService } from '../../backend/clients/api/accounts.service';
import { PostService } from 'src/app/backend/clients';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { take } from 'rxjs/operators';
import { NgxIonicImageViewerModule } from 'ngx-ionic-image-viewer';
@Component({
  selector: 'user-timeline',
  templateUrl: './user-timeline.page.html',
  styleUrls: ['./user-timeline.page.scss'],
})
export class UserTimelinePage  {

  constructor(
    public modalController: ModalController,
    private loadingController: LoadingController,
    private accountService: AccountsService,
    private postService: PostService,
    private zone: NgZone,
    private router: Router,
    private route: ActivatedRoute,
    private imgview: NgxIonicImageViewerModule
  ) {
     this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.selectedUserId = this.router.getCurrentNavigation().extras.state.userId;
        this.userLocations = this.router.getCurrentNavigation().extras.state.userLocations;
        this.refreshPosts();
      }
      console.log(this.selectedUserId);
    });
  }
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  posts: PostApi[] = [];
  pageNumber = 1;
  morePages = false;
  filter = '';
  selectedUserId = '';
  userLocations = '';
  sliderOpt = {
    zoom: {
      maxRatio: 1,
    },
  };

  getPosts(event?: any) {
    if (this.morePages) {
      this.postService
        .postsPageGet(this.pageNumber + 1, this.filter, this.selectedUserId)
        .pipe(take(1))
        .subscribe((res) => {
          this.morePages = res.hasNextPage;
          this.pageNumber = res.pageIndex;

          // TODO The posts shouldn't be overwritten here but rather appended... not working though
          if (this.posts.length === 0) {
            this.posts = [];
          } else {
            const oldposts = this.posts;
            this.posts = [];
            const oldResLen = oldposts.length;
            for (let i = 0; i < oldResLen; i++) {
              this.posts.push(oldposts[i]);
            }
          }
          const resLen = res.items.length;
          for (let i = 0; i < resLen; i++) {
            this.posts.push(res.items[i]);
          }
          // this.posts = res.items;
          if (event) {
            event.target.complete();
          }
        });
    } else {
      this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
  }

  refreshPosts(event?: any) {
    this.postService
      .postsPageGet(1, this.filter, this.selectedUserId)
      .pipe(take(1))
      .subscribe((res) => {
        this.morePages = res.hasNextPage;
        this.pageNumber = res.pageIndex;
        this.posts = res.items;
        if (event) {
          event.target.complete();
        }
      });
  }

  async presentSearchModal() {
    this.router.navigateByUrl('/search');
    // const modal = await this.modalController.create({
    //   component: SearchPage,
    //   componentProps: {},
    //   showBackdrop: true,
    //   cssClass: 'search-modal',
    // });
    // return await modal.present();
  }

  openProfile() {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      skipLocationChange: true,
      state: {
        userId: this.accountService.getUserId(),
      },
    };
    this.zone.run(() => {
      this.router.navigateByUrl('/user-profile', navigationExtras);
    });
  }

  async presentMapFilter() {
    const modal = await this.modalController.create({
      component: MapFilterPage,
      showBackdrop: true,
      cssClass: 'filter-modal',
      componentProps: {
        filter: this.filter,
        userLocations: this.userLocations
      },
    });

    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned !== null) {
        this.filter = dataReturned.data;
        this.refreshPosts();
      }
      this.refreshPosts();
    });
    return await modal.present();
  }

  dismiss() {
    this.router.navigateByUrl('/user-profile');
  }
}
