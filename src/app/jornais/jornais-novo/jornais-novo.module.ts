import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JornaisNovoPageRoutingModule } from './jornais-novo-routing.module';

import { JornaisNovoPage } from './jornais-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JornaisNovoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [JornaisNovoPage]
})
export class JornaisNovoPageModule {}
