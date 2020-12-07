import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { LivrosInfoPageRoutingModule } from './livros-info-routing.module';

import { LivrosInfoPage } from './livros-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivrosInfoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [LivrosInfoPage]
})
export class LivrosInfoPageModule {}
