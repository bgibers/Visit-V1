import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as moment from 'moment';

@Component({
  selector: 'post-register-about',
  templateUrl: './post-register-about.page.html',
  styleUrls: ['./post-register-about.page.scss'],
})
export class PostRegisterAboutPage implements OnInit {
  private optionsCamera: CameraOptions = {
    quality: 100,
    targetWidth: 600,
    sourceType: this.camera.PictureSourceType.CAMERA,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  private optionsGallery: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  minDate = moment().subtract(100, 'y').format();
  maxDate = moment().subtract(16, 'y').format();
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
    private route: ActivatedRoute,
    private camera: Camera
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
    this.router.navigateByUrl('/tab1', navigationExtras);
  }

  getUserImage() {
    // this.camera.getPicture(this.optionsCamera).then((imageData) => {
    //   let base64Image = 'data:image/jpeg;base64,' + imageData;
    //  }, (err) => {
    //   // Handle error
    //   console.log(err);
    //  });

    this.camera.getPicture(this.optionsGallery).then((imageData) => {
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
      console.log(err);
      });
  }
}
