import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';
import { MapFilterPage } from '../modals/map-filter/map-filter.page';
import { Router, NavigationExtras } from '@angular/router';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'news-feed',
  templateUrl: 'news-feed.page.html',
  styleUrls: ['news-feed.page.scss']
})
export class NewsFeedPage implements OnInit {
  items: any[] = [];

 lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
 rotateImg = 0;

  images = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile'
  ];
  constructor(public modalController: ModalController,
              private modalService: ModalService,
              private router: Router) {
  }

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.items.push({
        name: i + ' - ' + this.images[this.rotateImg],
        imgSrc: this.getImgSrc(),
        avatarSrc: this.getImgSrc(),
        imgHeight: 500,
        content: this.lorem.substring(0, 150)
      });

      this.rotateImg++;
      if (this.rotateImg === this.images.length) {
        this.rotateImg = 0;
      }
    }
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
    this.rotateImg++;
    if (this.rotateImg === this.images.length) {
      this.rotateImg = 0;
    }
    if (this.rotateImg % 2) {
      return src;
    } else {
      return undefined;
    }
  }

  openProfile() {
    const navigationExtras: NavigationExtras = {
      replaceUrl: false,
      state: {
        userName: 'tester'
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

