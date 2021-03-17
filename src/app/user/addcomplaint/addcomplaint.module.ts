import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcomplaintPageRoutingModule } from './addcomplaint-routing.module';

import { AddcomplaintPage } from './addcomplaint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcomplaintPageRoutingModule
  ],
  declarations: [AddcomplaintPage]
})
export class AddcomplaintPageModule {}
