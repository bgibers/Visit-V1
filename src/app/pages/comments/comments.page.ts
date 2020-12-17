import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AccountsService, PostService } from 'src/app/backend/clients';
import { CommentForPost } from 'src/app/backend/clients/model/commentForPost';
import { CommentApi } from 'src/app/backend/clients/model/commentApi';
import { SearchPage } from '../modals/search/search.page';

@Component({
  selector: 'comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  comments: CommentForPost[] = [];
  postId = '';
  userId: any;
  public commentText = '';

  constructor(public modalController: ModalController,
              private router: Router,
              private route: ActivatedRoute,
              private postSvc: PostService,
              private accountService: AccountsService) {
                  this.route.queryParams.subscribe(params => {
                  if (this.router.getCurrentNavigation().extras.state) {
                    this.postId = this.router.getCurrentNavigation().extras.state.postId;
                  }
                });
              }


  ngOnInit() {
    this.getComments();
    const token = this.accountService.getToken().value;
    this.userId = token.id;
  }

  ionViewWillEnter() {
    this.getComments();
  }

  getComments() {
    this.postSvc.postsCommentsGetPostIdGet(this.postId).pipe(take(1)).subscribe(res => {
      this.comments = res;
    });
  }

  get canSend(): boolean {
    return this.commentText.length > 1 && this.commentText.length < 250;
  }

  commentOnPost() {
    const comment = {
      comment: this.commentText
    } as CommentApi;

    this.postSvc.postsCommentPostIdPost(this.postId, comment).pipe(take(1)).subscribe(res => {
      // todo handle error. refresh comments after new posted
      this.getComments();
    });
    this.commentText = '';
  }

  backToFeed() {
    this.router.navigateByUrl('/news-feed');
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
}
