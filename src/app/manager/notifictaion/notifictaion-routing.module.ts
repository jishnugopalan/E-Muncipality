import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifictaionPage } from './notifictaion.page';

const routes: Routes = [
  {
    path: '',
    component: NotifictaionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifictaionPageRoutingModule {}
