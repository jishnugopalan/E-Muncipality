import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsolutionPage } from './addsolution.page';

const routes: Routes = [
  {
    path: '',
    component: AddsolutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsolutionPageRoutingModule {}
