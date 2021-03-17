import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsolutionPageRoutingModule } from './addsolution-routing.module';

import { AddsolutionPage } from './addsolution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddsolutionPageRoutingModule
  ],
  declarations: [AddsolutionPage]
})
export class AddsolutionPageModule {}
