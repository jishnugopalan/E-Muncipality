import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifictaionPageRoutingModule } from './notifictaion-routing.module';

import { NotifictaionPage } from './notifictaion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifictaionPageRoutingModule
  ],
  declarations: [NotifictaionPage]
})
export class NotifictaionPageModule {}
