import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JornaisNovoPage } from './jornais-novo.page';

const routes: Routes = [
  {
    path: '',
    component: JornaisNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JornaisNovoPageRoutingModule {}
