import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RevistasInfoPage } from './revistas-info.page';

const routes: Routes = [
  {
    path: '',
    component: RevistasInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevistasInfoPageRoutingModule {}
