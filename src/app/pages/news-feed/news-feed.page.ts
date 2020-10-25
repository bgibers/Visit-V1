import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { MapFilterPage } from '../modals/map-filter/map-filter.page';
import { Router, NavigationExtras } from '@angular/router';
import { ModalService } from '../../services/modal.service';
import { AccountsService } from '../../backend/clients/api/accounts.service';
import { PostService, PostPaginatedList, Post } from 'src/app/backend/clients';

@Component({
  selector: 'news-feed',
  templateUrl: 'news-feed.page.html',
  styleUrls: ['news-feed.page.scss']
})
export class NewsFeedPage implements OnInit {
  posts: Post[] = [];
  pageNumber = 1;
  morePages = false;

  constructor(public modalController: ModalController,
              private modalService: ModalService,
              private accountService: AccountsService,
              private postService: PostService,
              private router: Router) {
  }

  ngOnInit() {
    this.postService.postsPostsPageGet(1).subscribe(res => {
      this.morePages = res.hasNextPage;
      this.pageNumber = res.pageIndex;
      this.posts = res.items;
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

