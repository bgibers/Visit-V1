import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { PostComponent } from "../components/post/post.component";
import { CardFlipComponent } from "../components/card-flip/card-flip.component";
import { DateAgoPipe } from "../pipes/date-ago.pipe";

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [PostComponent, CardFlipComponent, DateAgoPipe],
  providers: [],
  exports: [PostComponent, CardFlipComponent, DateAgoPipe],
})
export class SharedModule {}
