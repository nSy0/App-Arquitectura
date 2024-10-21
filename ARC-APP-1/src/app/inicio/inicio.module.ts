import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from './inicio.page';
import { InicioPageRoutingModule } from './inicio-routing.module';
/* COMPONENTES: */
import { DelitoComponent } from '../components/delito/delito.component';
/* SHARED COMPONENTS: */
/* SHARED: */
import { SharedModule } from '../shared/shared.module';
/* SHARED: */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
  /* IMPORTA LOS SHARED:  */  
    SharedModule,
  ],
  declarations: [
  /* TODOS LOS COMPONENTES NUEVOS VAN AQUI: */
    InicioPage, 
    DelitoComponent
  /* TODOS LOS COMPONENTES NUEVOS VAN AQUI: */
  ]
})
export class InicioPageModule {}
