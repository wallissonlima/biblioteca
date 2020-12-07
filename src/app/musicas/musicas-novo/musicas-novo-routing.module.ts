import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasNovoPage } from './musicas-novo.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasNovoPageRoutingModule {}
