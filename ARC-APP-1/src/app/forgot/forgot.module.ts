import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ForgotPageRoutingModule } from './forgot-routing.module';
import { ForgotPage } from './forgot.page';
/* SHARED: */
import { SharedModule } from '../shared/shared.module';
/* SHARED: */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPageRoutingModule,
    SharedModule
  ],
  declarations: [ForgotPage]
})
export class ForgotPageModule {}
