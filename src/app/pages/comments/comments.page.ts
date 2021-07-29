import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AccountsService, PostService } from 'src/app/backend/clients';
import { CommentForPost } from 'src/app/backend/clients/model/commentForPost';
import { CommentApi } from 'src/app/backend/clients/model/commentApi';
import { SearchPage } from '../modals/search/search.page';
import { BehaviorSubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { ViewerModalComponent } from 'ngx-ionic-image-viewer';

@Component({
  selector: 'comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage {
  comments = [];
  thisIstheDataForThisComponent: Observable<any>;
  newComments = [];
  postId = '';
  post: PostApi = {};
  userId: any;
  public commentText = '';
  image: any;
  postfaa: any;
  likeIcon = '../../assets/UI/heart.svg';
  likedIcon = '../../assets/UI/liked-icon.svg';

  constructor(
    private storage: Storage,
    public modalController: ModalController,
    public loadingController: LoadingController,
    private router: Router,
    private zone: NgZone,
    private route: ActivatedRoute,
    private postSvc: PostService,
    private accountService: AccountsService,
    private cd: ChangeDetectorRef
  ) {
    this.storage.get('image').then((val) => {
      this.image = val.avi;
   });

    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.postId = this.router.getCurrentNavigation().extras.state.postId;
      }
    });
    this.ionViewWillEnter();
  }

  myFunc() {
    return { count: 1, data: { id: 1 } };
  }

  async ionViewWillEnter() {
    const loading = await this.loadingController.create({
      // duration: 2000,
    });
    await loading.present();

    this.getComments();
    await this.getPost(loading).then(() => {
      this.cd.detectChanges();
    });
  }

  async getPost(loading: HTMLIonLoadingElement) {
    return new Promise((resolve) => {
      this.postSvc.postsSingleIdGet(+this.postId).pipe(take(1)).subscribe(async res => {
        console.log(res)
        this.post = res;
        loading.dismiss();
        resolve('done');
      });
    });
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
          this.comments.push(res[i]);
        }
        this.cd.detectChanges();
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
      this.router.navigateByUrl('/tab1');
    });
  }

  openProfile(userId: string) {
    const navigationExtras: NavigationExtras = {
      replaceUrl: false,
      state: {
        userId,
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
