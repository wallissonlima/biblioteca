import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { RevistasInfoPageRoutingModule } from './revistas-info-routing.module';

import { RevistasInfoPage } from './revistas-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevistasInfoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [RevistasInfoPage]
})
export class RevistasInfoPageModule {}
