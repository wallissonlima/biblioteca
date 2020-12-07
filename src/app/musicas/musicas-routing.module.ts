import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasPage } from './musicas.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasPage
  },
  {
    path: 'musicas-novo',
    loadChildren: () => import('./musicas-novo/musicas-novo.module').then( m => m.MusicasNovoPageModule)
  },
  {
    path: 'musicas-info/:id',
    loadChildren: () => import('./musicas-info/musicas-info.module').then( m => m.MusicasInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasPageRoutingModule {}
