import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { take } from 'rxjs/operators';
import { AccountsService, Post, PostService } from 'src/app/backend/clients';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { EditPostPage } from 'src/app/pages/edit-post/edit-post.page';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postfaa: any;
  userId: string;
  constructor(
    private router: Router,
    private zone: NgZone,
    private postSvc: PostService,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private accountService: AccountsService
  ) {
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.displayNewUser = true;
    //     this.username = this.router.getCurrentNavigation().extras.state.newUser;
    //   }
    // });
  }

  @Input() posts: PostApi[] = [];

  location = 'Charleston, SC';

  // flipped = false;
  likeIcon = '../../assets/UI/heart.svg';
  likedIcon = '../../assets/UI/liked-icon.svg';
  ngOnInit() {
    this.userId = this.accountService.getUserId();
  }

  async openViewer(post) {
    this.postfaa = post;
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: this.postfaa
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    });
 
    return await modal.present();
  }
  likePost(post: PostApi) {
    if (!post.likedByCurrentUser) {
      this.postSvc
        .postsLikePostIdPost(post.postId.toString())
        .pipe(take(1))
        .subscribe();
      post.likeCount++;
      post.likedByCurrentUser = true;
    }
  }

  viewComments(post: PostApi) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      state: {
        postId: post.postId,
      },
    };
    this.zone.run(() => {
      this.router.navigateByUrl('/comments', navigationExtras);
    });
  }

  openProfile(post: PostApi) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      state: {
        userId: post.fkUserId,
      },
    };
    this.zone.run(() => {
      this.router.navigateByUrl('/user-profile', navigationExtras);
    });
  }

  async presentActionSheet(post: PostApi) {
    const actionSheet = await this.actionSheetController.create({
      // header: 'Post',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Edit Post',
        // role: 'destructive',
        icon: 'create-outline',
        handler: async () => {
          const modal = await this.modalController.create({
            component: EditPostPage,
            showBackdrop: true,
            componentProps: {
              post
            },
          });

          modal.onDidDismiss().then(async (dataReturned) => {
          });

          return await modal.present();
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
