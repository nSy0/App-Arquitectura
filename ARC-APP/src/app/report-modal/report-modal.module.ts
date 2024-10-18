import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReportModalPageRoutingModule } from './report-modal-routing.module';
import { ReportModalPage } from './report-modal.page';
/* SHARED: */
import { SharedModule } from '../shared/shared.module';
/* SHARED: */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportModalPageRoutingModule,
    SharedModule
  ],
  declarations: [
    ReportModalPage,
  
  ]
})
export class ReportModalPageModule {}
