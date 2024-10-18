import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListarDelitosPageRoutingModule } from './listar-delitos-routing.module';
import { ListarDelitosPage } from './listar-delitos.page';
/* COMPONENTES: */
import { ListdelitoComponent } from '../components/listdelito/listdelito.component';
/* COMPONENTES: */
/* SHARED: */
import { SharedModule } from '../shared/shared.module';
/* SHARED: */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarDelitosPageRoutingModule,
    SharedModule
  ],
  declarations: [
  /* TODOS LOS COMPONENTES NUEVOS VAN AQUI: */
    ListarDelitosPage,
    ListdelitoComponent
   /* TODOS LOS COMPONENTES NUEVOS VAN AQUI: */  
  ]
})
export class ListarDelitosPageModule {}
