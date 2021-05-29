import { Component, NgZone, OnInit } from '@angular/core';

import { Platform, ModalController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';

import { AddPage } from './pages/modals/add/add.page';
import { Router } from '@angular/router';

import { AccountsService } from './backend/clients/api/accounts.service';
import { ModalService } from './services/modal.service';

import { PushNotificationSchema, Token, ActionPerformed, PushNotifications } from '@capacitor/push-notifications';
import { FCM } from '@capacitor-community/fcm';
import { from } from 'rxjs';
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
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.setStyle({style: Style.Default});
      SplashScreen.hide();
      this.registerPush();

      if(this.userService.isLoggedIn) { 
          this.router.navigate(['tab1']);
      } else {
          this.router.navigate(['sign-in']);
      }
    });
  }

  private registerPush() {
      from(fcm.getToken().then((r) => {
        console.log(`FCM Token: ${r.token}`); // ---- showing null.
      }).catch((err) => {
        console.log(`FCM Token ERROR: ${JSON.stringify(err)}`);
      }));

    from(PushNotifications.requestPermissions().then((permission) => {
      if (permission.receive !== "granted") {
        PushNotifications.register();
      } else {
        alert('No permission for push granted');
      }
    }));

    PushNotifications.addListener(
      'registration',
      (token: Token) => {
        console.log('APN token: ' + JSON.stringify(token));
      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Registration Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log(notification.title);
        this.alert(notification.title, notification.body);
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
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
