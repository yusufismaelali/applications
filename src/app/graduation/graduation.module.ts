import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraduationPageRoutingModule } from './graduation-routing.module';

import { GraduationPage } from './graduation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GraduationPageRoutingModule
  ],
  declarations: [GraduationPage]
})
export class GraduationPageModule {}
