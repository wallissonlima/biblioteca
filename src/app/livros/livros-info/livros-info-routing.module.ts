import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosInfoPage } from './livros-info.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosInfoPageRoutingModule {}
