import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JornaisInfoPage } from './jornais-info.page';

const routes: Routes = [
  {
    path: '',
    component: JornaisInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JornaisInfoPageRoutingModule {}
