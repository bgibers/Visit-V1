import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Platform, ModalController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar, Style } from '@capacitor/status-bar';
import { PushNotificationSchema, Token, ActionPerformed, PushNotifications } from '@capacitor/push-notifications';
import { FCM } from '@capacitor-community/fcm';
import {  Capacitor } from '@capacitor/core';
import { from } from 'rxjs';
const fcm = new FCM();

import { AddPage } from './pages/modals/add/add.page';
import { AccountsService } from './backend/clients/api/accounts.service';
import { ModalService } from './services/modal.service';
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
    this.platform.ready().then(() => {
      this.initializeApp();
    });
  }

  ngOnInit() {
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (Capacitor.isPluginAvailable('StatusBar')) { 
        StatusBar.setStyle({style: Style.Default});
      };

      if (Capacitor.isPluginAvailable('SplashScreen')) { 
        SplashScreen.hide();
      };

      if (Capacitor.isPluginAvailable('PushNotifications')) { 
        this.registerPush();
      };

      this.zone.run(() => {
        if(this.userService.isLoggedIn) { 
            this.router.navigate(['tab1']);
        } else {
            this.router.navigate(['sign-in']);
        }
      })
    });
  }

  private registerPush() {

    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register().then(() => 
          from(fcm.getToken().then((r) => {
            this.userService.setFcmToken(r.token)
          }).catch((err) => {
            console.log(`FCM Token ERROR: ${JSON.stringify(err)}`);
          }))
        );
      } else {
        console.log('Push notifications not registered')
      }
    });

    PushNotifications.addListener(
      'registration',
      (token: Token) => {
        alert('Push registration success, token: ' + token.value);
      },
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      alert('Error on registration: ' + JSON.stringify(error));
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
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      },
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
