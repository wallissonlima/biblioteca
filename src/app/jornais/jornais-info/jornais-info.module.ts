import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JornaisInfoPageRoutingModule } from './jornais-info-routing.module';

import { JornaisInfoPage } from './jornais-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JornaisInfoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [JornaisInfoPage]
})
export class JornaisInfoPageModule {}
