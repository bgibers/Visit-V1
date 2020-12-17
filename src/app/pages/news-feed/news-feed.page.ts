import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { MapFilterPage } from '../modals/map-filter/map-filter.page';
import { Router, NavigationExtras } from '@angular/router';
import { AccountsService } from '../../backend/clients/api/accounts.service';
import { PostService } from 'src/app/backend/clients';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { async } from 'rxjs/internal/scheduler/async';
import { take } from 'rxjs/operators';

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
  constructor(public modalController: ModalController,
              private accountService: AccountsService,
              private postService: PostService,
              private router: Router) {
  }

  ngOnInit() {
    this.postService.postsPageGet(this.pageNumber).pipe(take(1)).subscribe(res => {
      this.morePages = res.hasNextPage;
      this.pageNumber = res.pageIndex;
      this.posts = res.items;
    });
  }

  getPosts(event) {
    if (this.morePages) {
      this.postService.postsPageGet(this.pageNumber + 1).pipe(take(1)).subscribe(res => {
        this.morePages = res.hasNextPage;
        this.pageNumber = res.pageIndex;

        // TODO The posts shouldn't be overwritten here but rather appended... not working though
        this.posts = res.items;
        event.target.complete();
      });
    } else {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
      }
  }

  refreshPosts(event) {
    this.postService.postsPageGet(1).pipe(take(1)).subscribe(res => {
      this.morePages = res.hasNextPage;
      this.pageNumber = res.pageIndex;
      this.posts = res.items;
      event.target.complete();
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

 getImgSrc() {
    const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
    return src;
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
      cssClass: 'filter-modal'
    });

    // TODO Change this modalService to be some sort of map store instead.
    // Pass the map ID(filter, profile etc) to the component. In component see where
    // we are trying to open from. If exists, then grab
    // this.modalService.add(this.modal);
    return await modal.present();
  }
}

