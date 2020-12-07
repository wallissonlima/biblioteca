import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotebooksInfoPageRoutingModule } from './notebooks-info-routing.module';

import { NotebooksInfoPage } from './notebooks-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotebooksInfoPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [NotebooksInfoPage]
})
export class NotebooksInfoPageModule {}
