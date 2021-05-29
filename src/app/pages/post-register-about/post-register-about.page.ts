import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';

import * as moment from 'moment';
import { AccountsService, RegisterRequest } from 'src/app/backend/clients';
import { mergeMap, take } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'post-register-about',
  templateUrl: './post-register-about.page.html',
  styleUrls: ['./post-register-about.page.scss'],
})
export class PostRegisterAboutPage implements OnInit {
  minDate = moment().subtract(100, 'y').format();
  maxDate = moment().subtract(16, 'y').format();
  userImage = '../../../assets/UI/profilePicUpload.svg';
  aboutForm: FormGroup;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  hasError = false;
  error = '';
  image: Photo;
  blob: Blob;

  validationMessages = {
    birthday: [
      { type: 'required', message: 'Birthday is required.' },
      { type: 'pattern', message: 'Please enter a valid birthday.' }
    ],
    birthPlace: [
      { type: 'required', message: 'Birthplace is required.' }
    ],
    residence: [
      { type: 'required', message: 'Residence is required.' }
    ],
    education: [
      { type: 'required', message: 'Please select a valid option' }
    ],
    title: [
      { type: 'required', message: 'A useful title is required' }
    ],
  };
  constructor(
    public router: Router,
    public loadingController: LoadingController,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private accountService: AccountsService
  ) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.firstName = this.router.getCurrentNavigation().extras.state.firstName;
        this.lastName = this.router.getCurrentNavigation().extras.state.lastName;
        this.email = this.router.getCurrentNavigation().extras.state.email;
        this.password = this.router.getCurrentNavigation().extras.state.password;
      }
    });
  }

  ngOnInit() {
    const birthday = new FormControl(new Date(), Validators.required);
    const birthPlace = new FormControl('', Validators.required);
    const residence = new FormControl('', Validators.required);
    const education = new FormControl('', Validators.required);
    const title = new FormControl('', Validators.required);
    this.aboutForm = new FormGroup({
      birthday,
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

    this.accountService.accountRegisterPostForm(registerRequest).pipe(take(1))
      .subscribe(async res => {
        this.accountService.loginWithToken(res).pipe(take(1))
          .subscribe(async res => { 
            this.uploadImage();
            loading.dismiss();
          }, error => {
            loading.dismiss();
          });
    }, error => {
      this.hasError = true;
      this.error = 'Unable to register user. Please try again';
    });
    
  }

  uploadImage() {
    console.log(this.accountService.getToken())
    const navigationExtras: NavigationExtras = {
      replaceUrl: false
    };
    this.accountService.accountUpdateProfileImagePost(this.blob).pipe(take(1)).subscribe(res => {
      this.router.navigateByUrl('/post-register-locations', navigationExtras);
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
}
