import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public viewCtrl: ModalController) { }

  people: any[] = [];

  ngOnInit() {
    for (let i = 0; i < 20; i++) {
      this.people.push({
        name: 'Brendan Giberson',
        location: 'Charleston, SC'
      });
      }
  }

  dismiss() {
    this.viewCtrl.dismiss();
    }
}
