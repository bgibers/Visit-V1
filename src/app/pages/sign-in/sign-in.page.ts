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

  onSubmit(values) {
    const loginModel = {
      userName: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    } as LoginApiRequest;

    // todo check if username and token are valid if not throw error
    this.accountService.accountsLogin(loginModel).pipe(take(1)).subscribe(value => {

      if (value !== null) {
        const navigationExtras: NavigationExtras = {
          replaceUrl: false,
          state: {
            userId: value.id
          }
        };
        this.router.navigateByUrl('/tab1', navigationExtras);
      } else {
        console.log('Invalid username/password')
      }

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
