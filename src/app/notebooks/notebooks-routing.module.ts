import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotebooksPage } from './notebooks.page';

const routes: Routes = [
  {
    path: '',
    component: NotebooksPage
  },
  {
    path: 'notebooks-novo',
    loadChildren: () => import('./notebooks-novo/notebooks-novo.module').then( m => m.NotebooksNovoPageModule)
  },
  {
    path: 'notebooks-info/:id',
    loadChildren: () => import('./notebooks-info/notebooks-info.module').then( m => m.NotebooksInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotebooksPageRoutingModule {}
