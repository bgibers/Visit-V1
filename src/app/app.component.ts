import { Component, NgZone, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { Platform, ModalController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import {
  PushNotificationSchema,
  Token,
  ActionPerformed,
  PushNotifications,
} from '@capacitor/push-notifications';
import { FCM } from '@capacitor-community/fcm';
import { Capacitor } from '@capacitor/core';
import { from } from 'rxjs';
const fcm = new FCM();

import { AddPage } from './pages/modals/add/add.page';
import { AccountsService } from './backend/clients/api/accounts.service';
import { ModalService } from './services/modal.service';

import { environment } from 'src/environments/environment';
import firebase from 'firebase/app';
import { FirebaseAnalyticsService } from './backend/services/firebase-analytics.service';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  page: string;

  constructor(
    private platform: Platform,
    private userService: AccountsService,
    public modalController: ModalController,
    public alertController: AlertController,
    public router: Router,
    public zone: NgZone,
    public modalSvc: ModalService,
    public analyticsSvc: FirebaseAnalyticsService
  ) {
    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('StatusBar')) {
        StatusBar.setStyle({ style: Style.Default });
        StatusBar.setOverlaysWebView({ overlay: false});
      }

      if (Capacitor.isPluginAvailable('SplashScreen')) {
        SplashScreen.hide();
      }

      if (Capacitor.isPluginAvailable('PushNotifications')) {
        this.registerPush();
      }

      this.zone.run(() => {
        if (this.userService.isLoggedIn) {
          this.router.navigate(['tab1']);
        } else {
          this.router.navigate(['sign-in']);
        }
      });
    });
    firebase.initializeApp(environment.firebaseConfig);
  }

  refresh() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(['tab1']);
    });
  }
  private registerPush() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register().then(() =>
          from(
            fcm
              .getToken()
              .then((r) => {
                this.userService.setFcmToken(r.token);
              })
              .catch((err) => {
                console.log(`FCM Token ERROR: ${JSON.stringify(err)}`);
              })
          )
        );
      } else {
        console.log('Push notifications not registered');
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      // alert('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      // alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log(notification.data);
        // this.alert(notification.title, notification.body);
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        const navigationExtras: NavigationExtras = {
          replaceUrl: true,
          state: {
            postId: notification.notification.data.postId,
          },
        };
        this.zone.run(() => {
          this.router.navigateByUrl('/comments', navigationExtras);
        });
        console.log(notification.notification.data);
      }
    );
  }

  async alert(title: string, body: string) {
    const alert = await this.alertController.create({
      header: title,
      message: body,
      buttons: [
        {
          text: 'OKAY',
          role: 'cancel',
          handler: () => {
            alert.dismiss();
          },
        },
      ],
    });
    await alert.present();
  }

  get showFooter() {
    if (this.router.url === '/sign-in') {
      return false;
    }
    if (this.router.url === '/register') {
      return false;
    }
    if (this.router.url === '/post-register-about') {
      return false;
    }
    if (this.router.url === '/post-register-locations') {
      return false;
    }
    if (this.router.url === '/comments') {
      return false;
    }
    if (this.modalSvc.dis === false) {
      return false;
    }
    return true;
  }

  async presentAddModal() {
    const modal = await this.modalController.create({
      component: AddPage,
      showBackdrop: true,
      swipeToClose: true,
      cssClass: 'add-modal',
      backdropDismiss: true,
    });

    let currentUrl = this.router.url;

    modal.onDidDismiss().then(async (dataReturned) => {
      this.zone.run(() => {
            console.log(currentUrl);
            this.router.navigateByUrl('/', {skipLocationChange: true})
            .then(() =>
              this.router.navigate([currentUrl])
            );
            });
    });

    return await modal.present();
  }
}
