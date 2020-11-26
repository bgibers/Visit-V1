import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostImagePageRoutingModule } from './add-post-image-routing.module';

import { AddPostImagePage } from './add-post-image.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostImagePageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [AddPostImagePage]
})
export class AddPostImagePageModule {}
