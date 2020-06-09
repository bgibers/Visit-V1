import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PostComponent } from '../components/post/post.component';
import { CardFlipComponent } from '../components/card-flip/card-flip.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    PostComponent,
    CardFlipComponent
  ],
  providers: [],
  exports: [
    PostComponent,
    CardFlipComponent
  ]
})
export class SharedModule {}
