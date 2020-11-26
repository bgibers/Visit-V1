import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Post } from 'src/app/backend/clients';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {

  constructor(private router: Router) {
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.displayNewUser = true;
    //     this.username = this.router.getCurrentNavigation().extras.state.newUser;
    //   }
    // });
  }

  @Input() posts: Post[] = [];

  location = 'Charleston, SC';

  flipped = false;
  notifications: any[] = [];
  commentIcon = '../../../assets/UI/comment-icon.svg';
  likeIcon = '../../../assets/UI/liked-icon.svg';
  commentVerbage = 'commented on your post';
  likeVerbage = 'liked your post';

  ngOnInit() {
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

  getLocation(post: Post) {
    let locationName  = '';
    if (post.postUserLocation[0] != null && post.postUserLocation[0].fkLocation != null) {
      locationName = post.postUserLocation[0].fkLocation.fkLocation.locationName;
    }

    return locationName;
  }

    openProfile() {
      const navigationExtras: NavigationExtras = {
        replaceUrl: false,
        state: {
          userName: 'tester'
        }
      };
      this.router.navigateByUrl('/user-profile', navigationExtras);
    }
}
