import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostRegisterAboutPage } from "./post-register-about.page";

const routes: Routes = [
  {
    path: "",
    component: PostRegisterAboutPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRegisterAboutPageRoutingModule {}
