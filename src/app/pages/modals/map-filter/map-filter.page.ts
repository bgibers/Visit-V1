import { Component, OnInit, NgZone, AfterViewInit } from "@angular/core";
import { Map } from "../../../objects/map";
import { MapSelectionMode } from "../../../objects/enums/map-selection-mode";
import { LoadingController, ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: "map-filter",
  templateUrl: "./map-filter.page.html",
  styleUrls: ["./map-filter.page.scss"],
})
export class MapFilterPage {
  private map: Map;
  public selectionMode: MapSelectionMode = MapSelectionMode.FILTER;
  public filter = "";
  public selectedLocation: string;

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private zone: NgZone,
    private navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.map = new Map(this.zone);
    this.map.addMapToDiv(this.selectionMode, "filter-map");
    this.filter = this.navParams.data.filter;
  }

  ionViewDidLeave() {
    this.map.destroyMap();
  }

  async restFilter() {
    this.filter = "";
    await this.closeModal();
  }

  async filterSubmit() {
    if (this.map.selectedArr.length > 0) {
      this.filter = this.map.selectedArr[0].locationId;
    }
    await this.closeModal();
  }

  async closeModal() {
    const loading = await this.loadingController.create({
      duration: 2000,
    });
    await loading.present();
    const onClosedData = this.filter;
    await this.modalController.dismiss(onClosedData);
  }
}
