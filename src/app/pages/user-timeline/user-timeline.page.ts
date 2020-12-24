import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { MapFilterPage } from '../modals/map-filter/map-filter.page';
import { Router, NavigationExtras } from '@angular/router';
import { AccountsService } from '../../backend/clients/api/accounts.service';
import { PostService } from 'src/app/backend/clients';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { take } from 'rxjs/operators';

@Component({
  selector: 'user-timeline',
  templateUrl: './user-timeline.page.html',
  styleUrls: ['./user-timeline.page.scss'],
})
export class UserTimelinePage implements OnInit {
  @ViewChild(IonInfiniteScroll,  {static: false}) infiniteScroll: IonInfiniteScroll;

  posts: PostApi[] = [];
  pageNumber = 1;
  morePages = false;
  filter = '';
  selectedUserId = '';

  constructor(public modalController: ModalController,
              private loadingController: LoadingController,
              private accountService: AccountsService,
              private postService: PostService,
              private navParams: NavParams,
              private router: Router) {
  }

  ngOnInit() {
    this.selectedUserId = this.navParams.data.userId;
    this.postService.postsPageGet(this.pageNumber, this.filter, this.selectedUserId).pipe(take(1)).subscribe(res => {
      this.morePages = res.hasNextPage;
      this.pageNumber = res.pageIndex;
      this.posts = res.items;
    });
  }

  ionViewWillEnter() {
    this.selectedUserId = this.navParams.data.userId;
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
      });
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
    });
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

  dismiss() {
    this.modalController.dismiss();
  }
}
