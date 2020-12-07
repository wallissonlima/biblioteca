import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotebooksNovoPageRoutingModule } from './notebooks-novo-routing.module';

import { NotebooksNovoPage } from './notebooks-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotebooksNovoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NotebooksNovoPage]
})
export class NotebooksNovoPageModule {}
