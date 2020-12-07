import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasInfoPageRoutingModule } from './musicas-info-routing.module';

import { MusicasInfoPage } from './musicas-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasInfoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [MusicasInfoPage]
})
export class MusicasInfoPageModule {}
