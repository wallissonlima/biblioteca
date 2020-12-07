import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JornaisPage } from './jornais.page';

const routes: Routes = [
  {
    path: '',
    component: JornaisPage
  },
  {
    path: 'jornais-novo',
    loadChildren: () => import('./jornais-novo/jornais-novo.module').then( m => m.JornaisNovoPageModule)
  },
  {
    path: 'jornais-info/:id',
    loadChildren: () => import('./jornais-info/jornais-info.module').then( m => m.JornaisInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JornaisPageRoutingModule {}
