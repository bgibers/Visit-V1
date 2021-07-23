import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable';
import { take } from 'rxjs/operators';
import { PostService } from 'src/app/backend/clients';
import { CreatePostRequest } from 'src/app/backend/clients/model/createPostRequest';
import { LocationSelector } from 'src/app/objects/location-json/location.selector';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.page.html',
  styleUrls: ['./add-post.page.scss'],
})
export class AddPostPage implements OnInit {
  public selectedLocation: { id: string; name: string } = undefined;
  public postText: string = undefined;
  public locationOptions: { id: string; name: string }[] = [];
  error: boolean;

  constructor(
    public loadingController: LoadingController,
    private modalCtrl: ModalController,
    private selector: LocationSelector,
    private postService: PostService
  ) {}

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

  async post() {
    const loading = await this.loadingController.create({
      // duration: 2000,
    });
    await loading.present();

    this.postService
      .postsNewPostForm(this.postText, 'text', this.selectedLocation.id)
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
