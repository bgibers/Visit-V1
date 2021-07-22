import {
  ChangeDetectorRef,
  Component,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  IonInfiniteScroll,
  IonRefresher,
  LoadingController,
  ModalController,
} from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { MapFilterPage } from '../modals/map-filter/map-filter.page';
import { Router, NavigationExtras } from '@angular/router';
import { AccountsService } from '../../backend/clients/api/accounts.service';
import { PostService } from 'src/app/backend/clients';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { take } from 'rxjs/operators';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'news-feed',
  templateUrl: 'news-feed.page.html',
  styleUrls: ['news-feed.page.scss'],
})
export class NewsFeedPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  posts: PostApi[] = [];
  pageNumber = 1;
  morePages = false;
  filter = '';
  selectedUserId = '';
  image: any;
  

  constructor(
    private storage: Storage,
    public modalController: ModalController,
    private zone: NgZone,
    private cd: ChangeDetectorRef,
    private loadingController: LoadingController,
    private accountService: AccountsService,
    private postService: PostService,
    private router: Router
  ) {
    this.storage.get('image').then((val) => {
      if (val.avi) {
        this.image = val.avi;
      } else {
        this.image = '../../../assets/defaultuser.png';
      }
    });
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create();
    await loading.present();
    this.postService
      .postsPageGet(this.pageNumber, this.filter, this.selectedUserId)
      .pipe(take(1))
      .subscribe(
        async (res) => {
          this.morePages = res.hasNextPage;
          this.pageNumber = res.pageIndex;
          this.posts = res.items;

          this.refresh();
          // see if there are more than one page if so get them
          await this.getPosts(1);
          loading.dismiss();
        },
        async (err) => {
          if (err.status === 401) {
            await this.accountService.logout();
          }
        }
      );
  }

  async getPosts(incr: number, event?: any) {
    return new Promise((resolve) => {
      if (this.morePages) {
        this.postService
          .postsPageGet(
            this.pageNumber + incr,
            this.filter,
            this.selectedUserId
          )
          .pipe(take(1))
          .subscribe(
            (res) => {
              this.morePages = res.hasNextPage;
              this.pageNumber = res.pageIndex;

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
              if (event) {
                event.target.complete();
              }
              this.refresh();
              resolve('done');
            },
            async (err) => {
              console.log(err);
              if (err.status === 401) {
                await this.accountService.logout();
                resolve('done');
              }
            }
          );
      } else {
        resolve('done');
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
      }
    });
  }

  refreshPosts(event?: any) {
    this.postService
      .postsPageGet(1, this.filter, this.selectedUserId)
      .pipe(take(1))
      .subscribe(
        (res) => {
          this.morePages = res.hasNextPage;
          this.pageNumber = res.pageIndex;
          this.posts = res.items;
          if (event) {
            event.target.complete();
          }
        },
        async (err) => {
          console.log(err);
          if (err.status === 401) {
            await this.accountService.logout();
          }
        }
      );
  }

  async presentSearchModal() {
    const modal = await this.modalController.create({
      component: SearchPage,
      componentProps: {},
      showBackdrop: true,
      cssClass: 'search-modal',
    });
    return await modal.present();
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
      },
    });

    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned !== null) {
        this.filter = dataReturned.data;
        this.refreshPosts();
        await this.loadingController.dismiss();
      }
    });

    return await modal.present();
  }

  refresh() {
    this.cd.detectChanges();
  }
}
