import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SearchPage } from '../modals/search/search.page';

@Component({
  selector: 'user-timeline',
  templateUrl: './user-timeline.page.html',
  styleUrls: ['./user-timeline.page.scss'],
})
export class UserTimelinePage implements OnInit {
  items: any[] = [];
  lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  rotateImg = 0;
 
   modal = undefined;
 
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
  constructor(private modalController: ModalController) { }

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

  presentMapFilter() {
    
  }

  async presentSearchModal() {
    const modal = await this.modalController.create({
      component: SearchPage,
      showBackdrop: true,
      cssClass: 'search-modal'
    });
    return await modal.present();
  }

  dismiss() {
    this.modalController.dismiss();
  }
}