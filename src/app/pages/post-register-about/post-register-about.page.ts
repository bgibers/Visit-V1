import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;
import * as moment from 'moment';

@Component({
  selector: 'post-register-about',
  templateUrl: './post-register-about.page.html',
  styleUrls: ['./post-register-about.page.scss'],
})
export class PostRegisterAboutPage implements OnInit {
  minDate = moment().subtract(100, 'y').format();
  maxDate = moment().subtract(16, 'y').format();
  userImage = '../../../assets/UI/profilePicUpload.svg'
  aboutForm: FormGroup;
  firstName: string;
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
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.firstName = this.router.getCurrentNavigation().extras.state.firstName;
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

  onSubmit(values) {
    console.log(values);
    const navigationExtras: NavigationExtras = {
      replaceUrl: false,
      state: {
        userName: 'tester'
      }
    };
    this.router.navigateByUrl('/post-register-locations', navigationExtras);
  }

  async getUserImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    const imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.userImage = imageUrl;
  }
}
