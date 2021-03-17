import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerhomePage } from './managerhome.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerhomePageRoutingModule {}
