import { Injectable, NgZone } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import firebase from 'firebase/app';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private zone: NgZone) {}

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.

          resolve(true);
        } else {
          // No user is signed in.

          resolve(false);
          this.zone.run(() => {
            this.router.navigate(['sign-in']);
          });
        }
      });
    });
  }
}
