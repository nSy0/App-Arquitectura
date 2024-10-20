import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* COMPONENTES SHARED: */
import { HeaderComponent } from '../shared/components/header/header.component';
import { LogoComponent } from '../shared/components/logo/logo.component';
/* COMPONENTES SHARED: */

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent
  ],
  exports: [
    HeaderComponent,
    LogoComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
