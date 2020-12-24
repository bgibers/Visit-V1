import { Component, NgZone } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AddPage } from './pages/modals/add/add.page';
import { Router } from '@angular/router';

import { AccountsService } from './backend/clients/api/accounts.service';
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
    private userService: AccountsService,
    public modalController: ModalController,
    public router: Router,
    public zone: NgZone
  ) {
    this.initializeApp();
    // Map.getInstance(zone);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

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
