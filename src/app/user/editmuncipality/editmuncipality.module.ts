import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmuncipalityPageRoutingModule } from './editmuncipality-routing.module';

import { EditmuncipalityPage } from './editmuncipality.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmuncipalityPageRoutingModule
  ],
  declarations: [EditmuncipalityPage]
})
export class EditmuncipalityPageModule {}
