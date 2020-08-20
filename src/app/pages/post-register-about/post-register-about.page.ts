import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;
import * as moment from 'moment';
import { AccountsService, RegisterRequest } from 'src/app/backend/clients';
import { take } from 'rxjs/operators';

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

  onSubmit() {
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

    this.accountService.accountRegisterPostForm(registerRequest).pipe(take(1)).subscribe(res => {
      const navigationExtras: NavigationExtras = {
        replaceUrl: false,
        state: {
          token: res
        }
      };
      this.accountService.accountUpdateProfileImagePostForm(this.dataURLtoBlob(this.userImage)).pipe(take(1)).subscribe(res => {
        this.router.navigateByUrl('/post-register-locations', navigationExtras);
      });
    }, error => {
      this.hasError = true;
      this.error = 'Unable to register user. Please try again';
    });
  }

  dataURLtoBlob(dataurl) {
    const arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
}

  async getUserImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.dataUrl;
    // Can be set to the src of an image now
    this.userImage = imageUrl;
  }
}
