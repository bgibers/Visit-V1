import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
// Init for the web
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { environment } from './../../../environments/environment';
import { AccountsService } from '../clients/api/accounts.service';

@Injectable()
export class FirebaseAnalyticsService {
  analyticsEnabled = true;

  constructor(
    private userService: AccountsService
  ) {
    FirebaseAnalytics.initializeFirebase(environment.firebaseConfig).then(() => {
      FirebaseAnalytics.enable();
      FirebaseAnalytics.setCollectionEnabled({enabled: true});
    });
  }

  setUser() {
    // Use Firebase Auth uid
    FirebaseAnalytics.setUserId({
      userId: this.userService.getUserId()
    });
  }

  setProperty(name: string, value: string) {
    FirebaseAnalytics.setUserProperty({
      name,
      value,
    });
  }

  logEvent(name: string, params: object) {
    FirebaseAnalytics.logEvent({
      name,
      params
    });
  }

  setScreenName(screenName) {
    FirebaseAnalytics.setScreenName({
      screenName
    });
  }

  enableAnalytics() {
    FirebaseAnalytics.enable();
    this.analyticsEnabled = true;
  }

  disableAnalytics() {
    FirebaseAnalytics.disable();
    this.analyticsEnabled = false;
  }

  toggleAnalytics() {
    this.analyticsEnabled = !this.analyticsEnabled;
    FirebaseAnalytics.setCollectionEnabled({
      enabled: this.analyticsEnabled,
    });
  }
}
