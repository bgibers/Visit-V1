import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidator } from 'src/app/objects/validators/password.validator';
import { AccountsService } from 'src/app/backend/clients';
import { take } from 'rxjs/operators';

@Component({
  selector: 'register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  matchingPasswordsGroup: FormGroup;
  passwordType = 'password';

  registerForm: FormGroup;

  validationMessages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    firstName: [
      { type: 'required', message: 'First name is required.' }
    ],
    lastName: [
      { type: 'required', message: 'Last name is required.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ],
    confirmPassword: [
      { type: 'required', message: 'Confirm password is required.' }
    ],
    matchingPasswords: [
      { type: 'areEqual', message: 'Password mismatch.' }
    ],
  };

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private accountService: AccountsService
  ) { }


  ngOnInit() {
    const email = new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ]));
    this.matchingPasswordsGroup = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirmPassword: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });
    const firstName = new FormControl('', Validators.required);
    const lastName = new FormControl('', Validators.required);
    this.registerForm = new FormGroup({
      firstName,
      lastName,
      email,
      matchingPasswords: this.matchingPasswordsGroup,
    });
  }

  togglePasswordMode() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
  }

  onSubmit() {
    this.accountService.accountEmailTakenGet(this.registerForm.controls.email.value).pipe(take(1)).subscribe(res => {
      if (res === true) {
        const navigationExtras: NavigationExtras = {
          replaceUrl: false,
          state: {
           firstName: this.registerForm.controls.firstName.value,
           lastName: this.registerForm.controls.lastName.value,
           email: this.registerForm.controls.email.value,
           password: this.matchingPasswordsGroup.controls.password.value
          }
        };
        this.router.navigateByUrl('/post-register-about', navigationExtras);
      } else {
        // print error that email is taken
      }
    });

  }

}
