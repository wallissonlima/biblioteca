import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { NotebooksPageRoutingModule } from './notebooks-routing.module';

import { NotebooksPage } from './notebooks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotebooksPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [NotebooksPage]
})
export class NotebooksPageModule {}
