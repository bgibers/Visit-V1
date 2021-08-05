import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AccountsService, UserService } from 'src/app/backend/clients';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss'],
})
export class NotificationsPage {
  notifications: any[] = [];
  commentIcon = '../../../assets/UI/comment-icon.svg';
  likeIcon = '../../../assets/UI/liked-icon.svg';
  commentVerbage = 'commented on your post';
  likeVerbage = 'liked your post';
  userId = '';

  constructor(
    private storage: Storage,
    private router: Router,
    private zone: NgZone,
    private userService: UserService,
    private accountService: AccountsService,
    private loadingController: LoadingController,
    private cd: ChangeDetectorRef
  ) {
    this.userId = this.accountService.getUserId();
    // this.ionViewDidEnter();
  }

  async ionViewDidEnter() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.refreshNotifications(loading).then(() => {
      this.cd.detectChanges();
    });
    loading.dismiss();
  }

  refreshNotifications(event?: any) {
    this.notifications = [];

    return new Promise((resolve) => {
    this.userService.userNotificationsGet().pipe(take(1)).subscribe(async (res) => {
      res.forEach(not => {
        const isComment = not.comment !== '';
        this.notifications.push({
          name: `${not.userWhoPerformedAction.firstName} ${not.userWhoPerformedAction.lastName}`,
          icon: isComment ? this.commentIcon : this.likeIcon,
          verbage:  isComment ? this.commentVerbage : this.likeVerbage,
          isComment,
          comment: not.comment,
          time: not.date,
          postId: not.fkPostId,
          userAvi: not.userWhoPerformedAction.avi
        });
      });

      if (event.target !== undefined) {
        event.target.complete();
      }
      resolve('done');
    });
  });
  }

  // ngOnInit(): void {
  //   for (let i = 0; i < 10; i++) {
  //     this.notifications.push({
  //       name: 'Brendan Giberson',
  //       icon: this.commentIcon,
  //       verbage: this.commentVerbage,
  //       isComment: true,
  //       comment: 'That looks dope!',
  //       time: '10 mins ago',
  //     });

  //     this.notifications.push({
  //       name: 'Brendan Giberson',
  //       icon: this.likeIcon,
  //       verbage: this.likeVerbage,
  //       isComment: false,
  //       comment: 'That looks dope!',
  //       time: '10 mins ago',
  //     });
  //   }
  // }
}
