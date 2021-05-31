import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserTimelinePage } from "./user-timeline.page";

const routes: Routes = [
  {
    path: "",
    component: UserTimelinePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTimelinePageRoutingModule {}
