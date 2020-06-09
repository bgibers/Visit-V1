import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserTimelinePageRoutingModule } from './user-timeline-routing.module';

import { UserTimelinePage } from './user-timeline.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UserTimelinePageRoutingModule
  ],
  declarations: [UserTimelinePage]
})
export class UserTimelinePageModule {}
