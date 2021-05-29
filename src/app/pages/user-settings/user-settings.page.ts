import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Photo, Camera, CameraResultType } from '@capacitor/camera';
import { LoadingController, ModalController, NavParams } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { AccountsService, RegisterRequest, UserResponse } from 'src/app/backend/clients';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.page.html',
  styleUrls: ['./user-settings.page.scss'],
})
export class UserSettingsPage implements OnInit {

  userImage = '../../../assets/UI/profilePicUpload.svg';
  aboutForm: FormGroup;
  image: Photo;
  blob: Blob = undefined;
  user: UserResponse;
 
  constructor(
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    private navParams: NavParams,
    private modalController: ModalController,
    private accountService: AccountsService
  ) {
    this.user = this.navParams.data.user;
    this.userImage = this.user.avi;
  }

  ngOnInit() {
    const birthPlace = new FormControl('');
    const residence = new FormControl('');
    const education = new FormControl('');
    const title = new FormControl('');
    this.aboutForm = new FormGroup({
      birthPlace,
      residence,
      education,
      title
    });
   }

  async onSubmit() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();

    var title = this.aboutForm.controls.title.value === '' ? this.user.title : this.aboutForm.controls.title.value;
    var education = this.aboutForm.controls.education.value === '' ? this.user.education : this.aboutForm.controls.education.value;
    var birthPlace = this.aboutForm.controls.birthPlace.value === '' ? this.user.birthLocation : this.aboutForm.controls.birthPlace.value;
    var residence = this.aboutForm.controls.residence.value === '' ? this.user.residenceLocation : this.aboutForm.controls.residence.value;

    // todo create a forkjoin or something here to make these run together
    this.accountService.accountUpdatePost(this.user.firstname, this.user.lastname, 
      title, education, birthPlace, residence)
      .pipe(take(1)).subscribe(async res => {
        if (this.blob !== undefined) {
          this.accountService.accountUpdateProfileImagePost(this.blob).pipe(take(1)).subscribe(res => {})
        }
        await loading.dismiss();
        this.dismiss();
      });
  }

  b64toBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    this.blob = new Blob([ab], { type: 'image/jpeg' });
  }

  async getUserImage() {
    this.image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
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

  dismiss() {
    this.modalController.dismiss();
  }

  async logout() {
    await this.accountService.logout();
    this.dismiss();
  }
}