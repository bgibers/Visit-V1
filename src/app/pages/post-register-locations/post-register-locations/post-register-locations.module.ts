import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostRegisterLocationsPageRoutingModule } from './post-register-locations-routing.module';

import { PostRegisterLocationsPage } from './post-register-locations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRegisterLocationsPageRoutingModule
  ],
  declarations: [PostRegisterLocationsPage]
})
export class PostRegisterLocationsPageModule {}
