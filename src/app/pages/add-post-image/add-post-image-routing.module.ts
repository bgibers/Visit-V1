import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostImagePage } from './add-post-image.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostImagePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostImagePageRoutingModule {}
