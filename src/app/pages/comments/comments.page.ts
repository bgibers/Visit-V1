import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AccountsService, PostService } from 'src/app/backend/clients';
import { CommentForPost } from 'src/app/backend/clients/model/commentForPost';
import { CommentApi } from 'src/app/backend/clients/model/commentApi';
import { SearchPage } from '../modals/search/search.page';
import { Observable } from 'rxjs';

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
              myFunc() {
                return ({count: 1, data: {id: 1}})
              }
  ngOnInit() {
    // this.getComments();
    this.userId = this.accountService.getUserId();
    // setInterval(_ => {
    //   // this.thisIstheDataForThisComponent = this.myFunc();
    //   // this.newComments.push(1);
    //   console.log(this.newComments);
    // }, 5000)
  }
  ionViewWillEnter() {
    this.getComments();
  }
  // products(): Observable<any>{
    // let data1 = {id: 1};
    // return (data1);
  // }
  getComments() {
    // todo fix this. the list is overwriting
    this.postSvc.postsCommentsGetPostIdGet(this.postId).pipe(take(1)).subscribe(res => {
      if (this.comments.length === 0) {
        this.comments = [];
      } else {
        // let oldComments = this.comments;
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
      let resLen = res.length;
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
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
      skipLocationChange: true,
      state: {
        userId: this.accountService.getUserId()
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
