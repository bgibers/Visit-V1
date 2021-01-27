import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, IonRefresher, LoadingController, ModalController, Platform } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { MapFilterPage } from '../modals/map-filter/map-filter.page';
import { Router, NavigationExtras } from '@angular/router';
import { AccountsService } from '../../backend/clients/api/accounts.service';
import { PostService } from 'src/app/backend/clients';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { take } from 'rxjs/operators';
import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'news-feed',
  templateUrl: 'news-feed.page.html',
  styleUrls: ['news-feed.page.scss']
})
export class NewsFeedPage implements OnInit {
  @ViewChild(IonInfiniteScroll,  {static: false}) infiniteScroll: IonInfiniteScroll;

  posts: PostApi[] = [];
  pageNumber = 1;
  morePages = false;
  filter = '';
  selectedUserId = '';

  constructor(public modalController: ModalController,
              public plt: Platform,
              private loadingController: LoadingController,
              private accountService: AccountsService,
              private postService: PostService,
              private fcm: FCM,
              private router: Router) {
    this.plt.ready()
      .then(() => {
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log('Received in background');
          } else {
            console.log('Received in foreground');
          };
        });

        this.fcm.onTokenRefresh().subscribe(token => {
          // Register your new token in your back-end if you want
          // backend.registerToken(token);
        });
      });
  }

  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }



  ngOnInit() {
    this.postService.postsPageGet(this.pageNumber, this.filter, this.selectedUserId).pipe(take(1)).subscribe(res => {
      this.morePages = res.hasNextPage;
      this.pageNumber = res.pageIndex;
      this.posts = res.items;
    }, async err => {
      if (err.status === 401) {
        await this.accountService.logout();
      }
    });
  }

  getPosts(event?: any) {
    if (this.morePages) {
      this.postService.postsPageGet(this.pageNumber + 1, this.filter, this.selectedUserId).pipe(take(1)).subscribe(res => {
        this.morePages = res.hasNextPage;
        this.pageNumber = res.pageIndex;

        // TODO The posts shouldn't be overwritten here but rather appended... not working though
        this.posts = res.items;
        if (event) {
          event.target.complete();
        }
      }, (async err => {
        console.log(err)
        if (err.status === 401) {
          await this.accountService.logout();
        }
      }));
    } else {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
      }
  }

  refreshPosts(event?: any) {
    this.postService.postsPageGet(1, this.filter, this.selectedUserId).pipe(take(1)).subscribe(res => {
      this.morePages = res.hasNextPage;
      this.pageNumber = res.pageIndex;
      this.posts = res.items;
      if (event) {
        event.target.complete();
      }
    }, (async err => {
      console.log(err)
      if (err.status === 401) {
        await this.accountService.logout();
      }
    }));
  }

  async presentSearchModal() {
    const modal = await this.modalController.create({
      component: SearchPage,
      componentProps: {

      },
      showBackdrop: true,
      cssClass: 'search-modal'
    });
    return await modal.present();
  }

  openProfile() {
    const token = this.accountService.getToken().value;

    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      skipLocationChange: true,
      state: {
        userId: token.id
      }
    };
    this.router.navigateByUrl('/user-profile', navigationExtras);
  }

  async presentMapFilter() {
    const modal = await this.modalController.create({
      component: MapFilterPage,
      showBackdrop: true,
      cssClass: 'filter-modal',
      componentProps: {
        filter: this.filter
      }
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
}

