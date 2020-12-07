import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosNovoPage } from './livros-novo.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosNovoPageRoutingModule {}
