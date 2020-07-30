import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AccountsService, LoginApiRequest } from 'src/app/backend/clients';
import { take } from 'rxjs/operators';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private accountService: AccountsService
  ) { }
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

  togglePasswordMode() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  ngOnInit() {
    const email = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') // todo allow uppercase
    ]));
    const password = new FormControl('', Validators.compose([
      Validators.required
    ]));
    this.loginForm = new FormGroup({
      email,
      password
    });
  }

  onSubmit(values) {
    const loginModel = {
      userName: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    } as LoginApiRequest;

    this.accountService.accountsLogin(loginModel).pipe(take(1)).subscribe(token => {
      console.log('Token value ' + token.id)
      const navigationExtras: NavigationExtras = {
        replaceUrl: false,
        state: {
          userName: 'tester'
        }
      };
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
