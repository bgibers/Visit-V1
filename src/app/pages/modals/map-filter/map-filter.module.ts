import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapFilterPageRoutingModule } from './map-filter-routing.module';

import { MapFilterPage } from './map-filter.page';
import { MapComponent} from '../../../components/map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapFilterPageRoutingModule
  ],
  declarations: [
    MapFilterPage,
    MapComponent
  ]
})
export class MapFilterPageModule {}
