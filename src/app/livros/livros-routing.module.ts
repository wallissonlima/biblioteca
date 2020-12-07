import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosPage } from './livros.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosPage
  },
  {
    path: 'livros-novo',
    loadChildren: () => import('./livros-novo/livros-novo.module').then( m => m.LivrosNovoPageModule)
  },
  {
    path: 'livros-info/:id',
    loadChildren: () => import('./livros-info/livros-info.module').then( m => m.LivrosInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosPageRoutingModule {}
