import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AccountsService, PostService } from 'src/app/backend/clients';
import { CommentForPost } from 'src/app/backend/clients/model/commentForPost';
import { CommentApi } from 'src/app/backend/clients/model/commentApi';
import { SearchPage } from '../modals/search/search.page';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  comments = [];
  thisIstheDataForThisComponent: Observable<any>;
  newComments = [];
  postId = '';
  userId: any;
  public commentText = '';
  image: any;

  constructor(
    private storage: Storage,
    public modalController: ModalController,
    private router: Router,
    private zone: NgZone,
    private route: ActivatedRoute,
    private postSvc: PostService,
    private accountService: AccountsService
  ) {
    this.storage.get('image').then((val) => {
      this.image = val.avi;
     console.log(val);
   });
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postId = this.router.getCurrentNavigation().extras.state.postId;
      }
    });
  }
  myFunc() {
    return { count: 1, data: { id: 1 } };
  }
  ngOnInit() {
    this.userId = this.accountService.getUserId();
  }
  ionViewWillEnter() {
    this.getComments();
  }

  getComments() {
    // todo fix this. the list is overwriting
    this.postSvc
      .postsCommentsGetPostIdGet(this.postId)
      .pipe(take(1))
      .subscribe((res) => {
        if (this.comments.length === 0) {
          this.comments = [];
        } else {
          this.comments = [];
          // this.newComments = [];
          // console.log(this.comments);
          // let oldResLen = oldComments.length;
          //   for (let i = 0; i < oldResLen; i++) {
          //     console.log(i);
          //     this.comments.push(oldComments[i]);

          //     this.newComments.push(oldComments[i]);
          //   }
        }
        const resLen = res.length;
        for (let i = 0; i < resLen; i++) {
          console.log(i);
          this.comments.push(res[i]);
        }
        // this.comments = res;
      });
  }

  get canSend(): boolean {
    return this.commentText.length > 1 && this.commentText.length < 250;
  }

  commentOnPost() {
    const comment = {
      comment: this.commentText,
    } as CommentApi;

    this.postSvc
      .postsCommentPostIdPost(this.postId, comment)
      .pipe(take(1))
      .subscribe((res) => {
        // todo handle error. refresh comments after new posted
        this.getComments();
      });
    this.commentText = '';
  }

  backToFeed() {
    this.zone.run(() => {
      this.router.navigateByUrl('/news-feed');
    });
  }

  openProfile() {
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      skipLocationChange: true,
      state: {
        userId: this.accountService.getUserId(),
      },
    };
    this.zone.run(() => {
      this.router.navigateByUrl('/user-profile', navigationExtras);
    });
  }

  async presentSearchModal() {
    const modal = await this.modalController.create({
      component: SearchPage,
      componentProps: {},
      showBackdrop: true,
      cssClass: 'search-modal',
    });
    return await modal.present();
  }
}
