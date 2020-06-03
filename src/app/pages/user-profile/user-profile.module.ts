import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserProfilePageRoutingModule } from './user-profile-routing.module';

import { UserProfilePage } from './user-profile.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UserProfilePageRoutingModule,
            // Specify ng-circle-progress as an import
            NgCircleProgressModule.forRoot({
              backgroundStrokeWidth: 0,
              backgroundPadding: 7,
              space: -3,
              toFixed: 0,
              outerStrokeWidth: 8,
              outerStrokeColor: '#128C7E',
              innerStrokeWidth: 2,
              innerStrokeColor: '#12B2B3',
              animationDuration: 500,
              animation: true,
              startFromZero: false,
              responsive: true,
              showUnits: true,
              showSubtitle: false,
              showImage: false,
              renderOnClick: false,
              titleColor: '#128C7E',
              titleFontSize: '50',
              titleFontWeight: '150',
              unitsColor: '#128C7E',
              unitsFontSize: '25',
              unitsFontWeight: '150'
            })
  ],
  declarations: [UserProfilePage]
})
export class UserProfilePageModule {}
