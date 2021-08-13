import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostRegisterLocationsPageRoutingModule } from './post-register-locations-routing.module';

import { PostRegisterLocationsPage } from './post-register-locations.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRegisterLocationsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [PostRegisterLocationsPage],
})
export class PostRegisterLocationsPageModule {}
