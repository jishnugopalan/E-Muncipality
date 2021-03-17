import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmuncipalityPage } from './editmuncipality.page';

const routes: Routes = [
  {
    path: '',
    component: EditmuncipalityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmuncipalityPageRoutingModule {}
