import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PostRegisterAboutPageRoutingModule } from './post-register-about-routing.module';

import { PostRegisterAboutPage } from './post-register-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PostRegisterAboutPageRoutingModule
  ],
  declarations: [PostRegisterAboutPage]
})
export class PostRegisterAboutPageModule {}
