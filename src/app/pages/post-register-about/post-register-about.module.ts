import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PostRegisterAboutPageRoutingModule } from './post-register-about-routing.module';

import { PostRegisterAboutPage } from './post-register-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostRegisterAboutPageRoutingModule
  ],
  declarations: [PostRegisterAboutPage]
})
export class PostRegisterAboutPageModule {}
