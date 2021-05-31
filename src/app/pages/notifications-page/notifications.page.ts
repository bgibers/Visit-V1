import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notifications: any[] = [];
  commentIcon = '../../../assets/UI/comment-icon.svg';
  likeIcon = '../../../assets/UI/liked-icon.svg';
  commentVerbage = 'commented on your post';
  likeVerbage = 'liked your post';

  constructor() {}
  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.notifications.push({
        name: 'Brendan Giberson',
        icon: this.commentIcon,
        verbage: this.commentVerbage,
        isComment: true,
        comment: 'That looks dope!',
        time: '10 mins ago',
      });

      this.notifications.push({
        name: 'Brendan Giberson',
        icon: this.likeIcon,
        verbage: this.likeVerbage,
        isComment: false,
        comment: 'That looks dope!',
        time: '10 mins ago',
      });
    }
  }
}
