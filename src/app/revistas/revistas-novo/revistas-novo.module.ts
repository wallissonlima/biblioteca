import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RevistasNovoPageRoutingModule } from './revistas-novo-routing.module';

import { RevistasNovoPage } from './revistas-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevistasNovoPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RevistasNovoPage]
})
export class RevistasNovoPageModule {}
