import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraduationPage } from './graduation.page';

const routes: Routes = [
  {
    path: '',
    component: GraduationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GraduationPageRoutingModule {}
