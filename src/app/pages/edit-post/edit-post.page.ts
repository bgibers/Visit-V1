import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '@capacitor/camera';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { take } from 'rxjs/operators';
import { PostService } from 'src/app/backend/clients';
import { PostApi } from 'src/app/backend/clients/model/postApi';
import { LocationSelector } from 'src/app/objects/location-json/location.selector';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.page.html',
  styleUrls: ['./edit-post.page.scss'],
})
export class EditPostPage implements OnInit {

  public selectedLocation: { id: string; name: string } = undefined;
  public postText: string = undefined;
  public locationOptions: { id: string; name: string }[] = [];
  error: boolean;
  existingPost: PostApi;

  constructor(
    public router: Router,
    public loadingController: LoadingController,
    private modalCtrl: ModalController,
    private selector: LocationSelector,
    private postService: PostService,
    private navParams: NavParams
  ) {
      this.existingPost = this.navParams.data.post;
      this.postText = this.existingPost.postCaption;
    }

  ngOnInit() {
    this.locationOptions = this.selector.getAllLocations();
  }

  filterLocations(text: string) {
    return this.locationOptions.filter((option) => {
      return option.name.toLowerCase().indexOf(text) !== -1;
    });
  }

  searchLocations(event: {
    component: IonicSelectableComponent;
    text: string;
  }) {
    const text = event.text.trim().toLowerCase();
    event.component.startSearch();

    if (!text) {
      event.component.items = [];
      event.component.endSearch();
      return;
    }

    event.component.items = this.filterLocations(text);
    event.component.endSearch();
  }

  async updatePost() {
    const loading = await this.loadingController.create({
      // duration: 2000,
    });
    await loading.present();

    this.postService
      .postsPostIdEditPostForm(
        this.existingPost.postId.toString(),
        this.postText,
        'image',
        this.existingPost.location.locationId.toString()
      )
      .pipe(take(1))
      .subscribe(
        (res) => {
          loading.dismiss();
          this.dismiss();
        },
        (err) => {
          this.error = true;
          loading.dismiss();
        }
      );
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      dismissed: true,
    });
  }
}
