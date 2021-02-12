import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CameraPhoto, Camera, CameraResultType } from '@capacitor/core';
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
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  hasError = false;
  error = '';
  image: CameraPhoto;
  blob: Blob;
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
    const registerRequest = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password,
      birthday: this.aboutForm.controls.birthday.value,
      birthLocation: this.aboutForm.controls.birthPlace.value,
      residenceLocation: this.aboutForm.controls.residence.value,
      title: this.aboutForm.controls.title.value,
      education: this.aboutForm.controls.education.value
    } as RegisterRequest;
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