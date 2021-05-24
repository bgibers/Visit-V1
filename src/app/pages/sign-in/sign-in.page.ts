import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AccountsService, LoginApiRequest } from 'src/app/backend/clients';
import { take } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

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
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' }
    ]
  };

  invalidLogin: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public loadingController: LoadingController,
    private router: Router,
    private accountService: AccountsService
  ) { }

  togglePasswordMode() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  ngOnInit() {
    const email = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$')
    ]));
    const password = new FormControl('', Validators.compose([
      Validators.required
    ]));
    this.loginForm = new FormGroup({
      email,
      password
    });
  }

  async onSubmit(values) {
    const loginModel = {
      userName: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    } as LoginApiRequest;

    const loading = await this.loadingController.create({
      duration: 2000
    });
    await loading.present();

    await this.accountService.login(loginModel.userName, loginModel.password).then(value => {

      if (value === null) {
        this.invalidLogin = true;
        loading.dismiss();
      }
      const navigationExtras: NavigationExtras = {
        // replaceUrl: false,
        // state: {
        //   userId: value.id
        // }
      };
      loading.dismiss();
      this.router.navigateByUrl('/tab1', navigationExtras);
    });
  }

  openRegister() {
    const navigationExtras: NavigationExtras = {
      replaceUrl: false,
      state: {
        userName: 'tester'
      }
    };
    this.router.navigateByUrl('/register', navigationExtras);
  }

}
