import { Component, OnInit } from '@angular/core';


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
  constructor() {
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
}

