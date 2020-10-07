import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MapSelectionMode } from 'src/app/objects/enums/map-selection-mode';
import { ModalController } from '@ionic/angular';
import { MarkLocationPage } from '../../mark-location/mark-location/mark-location.page';

@Component({
  selector: 'add-modal',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  constructor(
    public router: Router,
    private modalCtrl: ModalController
    ) { }

  async markLocationsToVisit() {
    const modal = await this.modalCtrl.create({
      component: MarkLocationPage,
      componentProps: {
        selectionMode: MapSelectionMode.TO_VISIT
      }
    });
    return await modal.present();
  }

  async markVisitedLocations() {
    const modal = await this.modalCtrl.create({
      component: MarkLocationPage,
      componentProps: {
        selectionMode: MapSelectionMode.VISITED
      }
    });
    return await modal.present();
  }

}
