import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicasInfoPage } from './musicas-info.page';

const routes: Routes = [
  {
    path: '',
    component: MusicasInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicasInfoPageRoutingModule {}
