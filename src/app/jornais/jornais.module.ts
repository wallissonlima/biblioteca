import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { JornaisPageRoutingModule } from './jornais-routing.module';

import { JornaisPage } from './jornais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JornaisPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [JornaisPage]
})
export class JornaisPageModule {}
