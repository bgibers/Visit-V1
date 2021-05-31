import { Component, OnInit } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { MapSelectionMode } from "src/app/objects/enums/map-selection-mode";
import { ModalController } from "@ionic/angular";
import { MarkLocationPage } from "../../mark-location/mark-location.page";
import { AddPostPage } from "../../add-post/add-post.page";
import { AddPostImagePage } from "../../add-post-image/add-post-image.page";

@Component({
  selector: "add-modal",
  templateUrl: "./add.page.html",
  styleUrls: ["./add.page.scss"],
})
export class AddPage {
  constructor(public router: Router, private modalCtrl: ModalController) {}

  async markLocationsToVisit() {
    const modal = await this.modalCtrl.create({
      component: MarkLocationPage,
      componentProps: {
        selectionMode: MapSelectionMode.TO_VISIT,
      },
    });
    return await modal.present();
  }

  async markVisitedLocations() {
    const modal = await this.modalCtrl.create({
      component: MarkLocationPage,
      componentProps: {
        selectionMode: MapSelectionMode.VISITED,
      },
    });
    return await modal.present();
  }

  async addNewPost() {
    const modal = await this.modalCtrl.create({
      component: AddPostPage,
      componentProps: {},
    });
    return await modal.present();
  }

  async addNewImage() {
    const modal = await this.modalCtrl.create({
      component: AddPostImagePage,
      componentProps: {},
    });
    return await modal.present();
  }
}
