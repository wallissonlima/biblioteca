import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicasNovoPageRoutingModule } from './musicas-novo-routing.module';

import { MusicasNovoPage } from './musicas-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicasNovoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [MusicasNovoPage]
})
export class MusicasNovoPageModule {}
