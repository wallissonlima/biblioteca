import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevistasPage } from './revistas.page';

const routes: Routes = [
  {
    path: '',
    component: RevistasPage
  },
  {
    path: 'revistas-novo',
    loadChildren: () => import('./revistas-novo/revistas-novo.module').then( m => m.RevistasNovoPageModule)
  },
  {
    path: 'revistas-info/:id',
    loadChildren: () => import('./revistas-info/revistas-info.module').then( m => m.RevistasInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevistasPageRoutingModule {}
