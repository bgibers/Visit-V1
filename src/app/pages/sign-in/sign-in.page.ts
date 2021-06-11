import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AccountsService, LoginApiRequest } from 'src/app/backend/clients';
import { ForgotPasswordPage } from '../modals/forgot-password/forgot-password.page';


@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  passwordType = 'password';
  loginForm: FormGroup;

  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    password: [{ type: 'required', message: 'Password is required.' }],
  };

  invalidLogin = false;
  invalidLoginText = '';
  showAppleSignIn = false;

  constructor(
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    public modalController: ModalController,
    private platform: Platform,
    private cd: ChangeDetectorRef,
    private zone: NgZone,
    private router: Router,
    private accountService: AccountsService
  ) {}

  togglePasswordMode() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  async ngOnInit() {
    // Only show the Apple sign in button on iOS
    this.showAppleSignIn = this.platform.is('ios');

    const email = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,3}$'),
      ])
    );
    const password = new FormControl(
      '',
      Validators.compose([Validators.required])
    );
    this.loginForm = new FormGroup({
      email,
      password,
    });
  }

  openAppleSignIn() {
    this.accountService.loginApple();
  }

  async onSubmit(values) {
    const loginModel = {
      userName: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    } as LoginApiRequest;

    const loading = await this.loadingController.create({
      duration: 2000,
    });
    await loading.present();

    this.accountService.login(loginModel.userName, loginModel.password).then(
      (res) => {
        console.log(res);
        this.invalidLogin = false;

        this.zone.run(() => {
          const navigationExtras: NavigationExtras = {
            replaceUrl: false,
            // state: {
            //   userId: value.id
            // }
          };
          this.router.navigateByUrl('/tab1', navigationExtras);
        });
        loading.dismiss();
      },
      (err) => {
        if (err.code === 'auth/user-not-found') {
          this.invalidLoginText = 'User not found';
        } else if (err.code === 'auth/wrong-password') {
          this.invalidLoginText = 'Invalid password';
        } else {
          this.invalidLoginText = 'Unexpected error';
        }

        this.invalidLogin = true;
        this.refresh();
        loading.dismiss();
      }
    );
  }

  openRegister() {
    const navigationExtras: NavigationExtras = {
      replaceUrl: false,
      state: {
        // userName: 'tester',
      },
    };
    this.zone.run(() => {
      this.router.navigateByUrl('/register', navigationExtras);
    });
  }

  async presentForgotPassword() {
    const modal = await this.modalController.create({
      component: ForgotPasswordPage,
      showBackdrop: true,
      cssClass: 'forgot-password-modal',
    });

    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned !== null) {
        // this.filter = dataReturned.data;
        // this.refreshPosts();
        // await this.loadingController.dismiss();
      }
    });

    return await modal.present();
  }

  refresh() {
    this.cd.detectChanges();
  }

  get getInvalidLogin() {
    return this.invalidLogin;
  }
}
