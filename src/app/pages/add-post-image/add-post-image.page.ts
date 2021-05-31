import { Component, OnInit } from "@angular/core";
import { CameraResultType, Photo, Camera } from "@capacitor/camera";
import { LoadingController, ModalController } from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { take } from "rxjs/operators";
import { PostService } from "src/app/backend/clients";
import { LocationSelector } from "src/app/objects/location-json/location.selector";

@Component({
  selector: "app-add-post-image",
  templateUrl: "./add-post-image.page.html",
  styleUrls: ["./add-post-image.page.scss"],
})
export class AddPostImagePage implements OnInit {
  public selectedLocation: { id: string; name: string } = undefined;
  public postText: string = undefined;
  public locationOptions: { id: string; name: string }[] = [];
  public userImage = "../../../assets/UI/clickToUpload.jpg";
  image: Photo;
  blob: Blob;
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
      duration: 2000,
    });
    await loading.present();

    this.postService
      .postsNewPostForm(
        this.postText,
        "image",
        this.selectedLocation.id,
        this.blob
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

  b64toBlob(dataURI) {
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    this.blob = new Blob([ab], { type: "image/jpeg" });
  }

  async getUserImage() {
    this.image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = this.image.dataUrl;
    // Can be set to the src of an image now
    this.userImage = imageUrl;
    this.b64toBlob(this.image.dataUrl);
  }
}
