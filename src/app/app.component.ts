import { Component, NgZone, OnInit } from '@angular/core';

import { Platform, ModalController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AddPage } from './pages/modals/add/add.page';
import { Router } from '@angular/router';

import { AccountsService } from './backend/clients/api/accounts.service';
import {ModalService} from './services/modal.service';

import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor, Modals} from '@capacitor/core';
const { PushNotifications } = Plugins;
import { FCM } from '@capacitor-community/fcm';
const fcm = new FCM();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  page: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: AccountsService,
    public modalController: ModalController,
    public alertController: AlertController,
    public router: Router,
    public zone: NgZone,
    public myservice: ModalService,
  ) {
    this.initializeApp();
    // Map.getInstance(zone);
  }

  ngOnInit() {
    this.registerPush();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.userService.authSubject.subscribe(state => {
        console.log('Initialize app');
        if (state) {
          this.router.navigate(['tab1']);
        } else {
          this.router.navigate(['sign-in']);
        }
      });
    });
  }

  private registerPush() {

    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        alert('No permission for push granted');
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        alert('APN token: ' + JSON.stringify(token));
        fcm.getToken().then((r) => {
          alert(`FCM Token: ${r.token}`); // ---- showing null.
        }).catch((err) => {
          alert(`FCM Token ERROR: ${JSON.stringify(err)}`);
        });

      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Registration Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        console.log(notification.title);
        this.alert(notification.title, notification.body);
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        alert('Action performed: ' + JSON.stringify(notification.notification.body));
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
          }
        }
      ]
    });
    await alert.present();
  }


  get showFooter() {
    if (this.router.url === '/sign-in') { return false; }
    if (this.router.url === '/register') { return false; }
    if (this.router.url === '/post-register-about') { return false; }
    if (this.router.url === '/post-register-locations') { return false; }
    if (this.router.url === '/comments') { return false; }
    if (this.myservice.dis === false) { return false; }
    return true;
  }

  async presentAddModal() {
    const modal = await this.modalController.create({
      component: AddPage,
      showBackdrop: true,
      swipeToClose: true,
      cssClass: 'add-modal',
      backdropDismiss: true
    });
    return await modal.present();
  }
}
