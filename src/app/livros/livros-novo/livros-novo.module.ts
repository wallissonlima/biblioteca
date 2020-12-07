import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivrosNovoPageRoutingModule } from './livros-novo-routing.module';

import { LivrosNovoPage } from './livros-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrosNovoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [LivrosNovoPage]
})
export class LivrosNovoPageModule {}
