import { Component, NgZone, OnInit } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
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
export class AppComponent {
  page: string;
  notifications: PushNotification[] = [];
  topicName = 'super-awesome-topic';
  remoteToken: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: AccountsService,
    public modalController: ModalController,
    public router: Router,
    public zone: NgZone,
    public myservice: ModalService,
  ) {
    this.initializeApp();
    // Map.getInstance(zone);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerForPush();
      
      this.userService.authSubject.subscribe(state => {
        console.log('Initialize app')
        if (state) {
          this.router.navigate(['tab1']);
        } else {
          this.router.navigate(['sign-in']);
        }
      });
    });
  }

  registerForPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });

    PushNotifications.addListener(
        'registration',
        (token: PushNotificationToken) => {
          console.log('My token: ' + JSON.stringify(token));
    });


    PushNotifications.addListener('registrationError', (error: any) => {
        console.log('Error: ' + JSON.stringify(error));
    });


    PushNotifications.addListener(
        'pushNotificationReceived',
        async (notification: PushNotification) => {
          Modals.alert({
            title: notification.title,
            message: notification.body
          });;
    });

    PushNotifications.addListener(
        'pushNotificationActionPerformed',
        async (notification: PushNotificationActionPerformed) => {
          const data = notification.notification.data;
          console.log('Action performed: ' + JSON.stringify(notification.notification));
          if (data.detailsId) {
            this.router.navigateByUrl(`/home/${data.detailsId}`);
          }
    });

  }

  subscribeTo() {
    PushNotifications.register()
      .then((_) => {
        fcm
          .subscribeTo({ topic: this.topicName })
          .then((r) => alert(`subscribed to topic ${this.topicName}`))
          .catch((err) => console.log(err));
      })
      .catch((err) => alert(JSON.stringify(err)));
  }

  unsubscribeFrom() {
    fcm
      .unsubscribeFrom({ topic: 'test' })
      .then((r) => alert(`unsubscribed from topic ${this.topicName}`))
      .catch((err) => console.log(err));
    if (this.platform.is('android')) fcm.deleteInstance();
  }

  getToken() {
    fcm
      .getToken()
      .then((r) => alert(`Token ${r.token}`))
      .catch((err) => console.log(err));
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
