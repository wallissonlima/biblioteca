import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { RevistasPageRoutingModule } from './revistas-routing.module';

import { RevistasPage } from './revistas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RevistasPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [RevistasPage]
})
export class RevistasPageModule {}
