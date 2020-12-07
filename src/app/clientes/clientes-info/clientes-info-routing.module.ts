import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesInfoPage } from './clientes-info.page';

const routes: Routes = [
  {
    path: '',
    component: ClientesInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesInfoPageRoutingModule {}
