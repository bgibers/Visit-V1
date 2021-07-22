import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapFilterPageRoutingModule } from './map-filter-routing.module';

import { MapFilterPage } from './map-filter.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MapFilterPageRoutingModule,
    SharedModule,
  ],
  declarations: [MapFilterPage],
})
export class MapFilterPageModule {}
