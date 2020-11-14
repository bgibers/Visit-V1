import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AccountsService } from '../clients';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
      public authenticationService: AccountsService
        ) {}

    canActivate(): boolean {
      return this.authenticationService.isLoggedIn();
    }
}
