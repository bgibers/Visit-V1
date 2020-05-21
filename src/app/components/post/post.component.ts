import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  constructor() { }
  @Input() items: any[] = [];

  username = 'Bgibers';
  location = 'Charleston, SC';
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  flipped = false;
  notifications: any[] = [];
  commentIcon = '../../../assets/UI/comment-icon.svg';
  likeIcon = '../../../assets/UI/liked-icon.svg';
  commentVerbage = 'commented on your post';
  likeVerbage = 'liked your post';

  ngOnInit() {
    this.content = this.content.substring(0, 150);
    for (let i = 0; i < 20; i++) {
      this.notifications.push({
        name: 'Brendan Giberson',
        icon: this.commentIcon,
        verbage: this.commentVerbage,
        isComment: true,
        comment: 'That looks dope!',
        time: '10 mins ago'
      });
      }
    }
}
