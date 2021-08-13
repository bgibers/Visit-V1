import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarkLocationPageRoutingModule } from './mark-location-routing.module';

import { MarkLocationPage } from './mark-location.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarkLocationPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MarkLocationPage],
})
export class MarkLocationPageModule {}
