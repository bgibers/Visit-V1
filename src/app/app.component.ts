import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AddPage } from './pages/modals/add/add.page';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  page: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public modalController: ModalController,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  get showFooter() {
    if (this.router.url === '/sign-in') { return false; }
    if (this.router.url === '/register') { return false; }
    if (this.router.url === '/post-register-about') { return false; }
    if (this.router.url === '/post-register-locations') { return false; }
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
