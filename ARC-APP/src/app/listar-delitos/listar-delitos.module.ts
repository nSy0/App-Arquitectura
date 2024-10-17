import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarDelitosPageRoutingModule } from './listar-delitos-routing.module';

import { ListarDelitosPage } from './listar-delitos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDelitosPageRoutingModule
  ],
  declarations: [ListarDelitosPage]
})
export class ListarDelitosPageModule {}
