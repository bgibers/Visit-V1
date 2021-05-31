import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PostRegisterLocationsPage } from "./post-register-locations.page";

const routes: Routes = [
  {
    path: "",
    component: PostRegisterLocationsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRegisterLocationsPageRoutingModule {}
