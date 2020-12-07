import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientesInfoPageRoutingModule } from './clientes-info-routing.module';

import { ClientesInfoPage } from './clientes-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientesInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ClientesInfoPage]
})
export class ClientesInfoPageModule {}
