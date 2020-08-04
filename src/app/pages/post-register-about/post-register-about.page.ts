import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { Plugins, CameraResultType } from '@capacitor/core';
import { File } from '@ionic-native/file/ngx';

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
    private accountService: AccountsService,
    private file: File
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
    let avi = new Blob();
    this.makeFileIntoBlob(this.userImage).then(img => avi = img);
    const registerRequest = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password,
      birthday: this.aboutForm.controls.birthday.value,
      birthLocation: this.aboutForm.controls.birthPlace.value,
      residenceLocation: this.aboutForm.controls.residence.value,
      title: this.aboutForm.controls.title.value,
      education: this.aboutForm.controls.education.value,
      avi
    } as RegisterRequest;

    this.accountService.accountRegisterPostForm(registerRequest).pipe(take(1)).subscribe(res => {
      const navigationExtras: NavigationExtras = {
        replaceUrl: false,
        state: {
          token: res
        }
      };
      this.router.navigateByUrl('/post-register-locations', navigationExtras);
    });
  }

      // FILE STUFF
    makeFileIntoBlob(imagePath): Promise<Blob> {
        // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
        return new Promise((resolve, reject) => {
          let fileName: string;
          this.file
            .resolveLocalFilesystemUrl(imagePath)
            .then(fileEntry => {
              const { name, nativeURL } = fileEntry;

              // get the path..
              const path = nativeURL.substring(0, nativeURL.lastIndexOf('/'));

              fileName = name;

              // we are provided the name, so now read the file into a buffer
              return this.file.readAsArrayBuffer(path, name);
            })
            .then(buffer => {
              // get the buffer and make a blob to be saved
              const imgBlob: Blob = new Blob([buffer], {
                type: 'image/jpeg'
              });

              resolve(
                imgBlob
              );
            })
            .catch(e => reject(e));
        });
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
    const imageUrl = image.path;
    // Can be set to the src of an image now
    this.userImage = imageUrl;
  }
}
