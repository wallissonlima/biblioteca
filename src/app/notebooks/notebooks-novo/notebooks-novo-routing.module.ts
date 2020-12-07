import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotebooksNovoPage } from './notebooks-novo.page';

const routes: Routes = [
  {
    path: '',
    component: NotebooksNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotebooksNovoPageRoutingModule {}
