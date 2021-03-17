import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagerhomePageRoutingModule } from './managerhome-routing.module';

import { ManagerhomePage } from './managerhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagerhomePageRoutingModule
  ],
  declarations: [ManagerhomePage]
})
export class ManagerhomePageModule {}
