import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcomplaintPage } from './addcomplaint.page';

const routes: Routes = [
  {
    path: '',
    component: AddcomplaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcomplaintPageRoutingModule {}
