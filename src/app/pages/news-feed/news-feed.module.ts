import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsFeedPage } from './news-feed.page';
import { PostComponent} from '../../components/post/post.component';
import { CardFlipComponent } from '../../components/card-flip/card-flip.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: NewsFeedPage }])
  ],
  declarations: [
    NewsFeedPage,
    PostComponent,
    CardFlipComponent
  ]
})
export class NewsFeedPageModule {}
