import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotebooksInfoPage } from './notebooks-info.page';

const routes: Routes = [
  {
    path: '',
    component: NotebooksInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotebooksInfoPageRoutingModule {}
