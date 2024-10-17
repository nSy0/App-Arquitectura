import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioPage } from './inicio.page';
/* COMPONENTES: */
import { DelitoComponent } from '../components/delito/delito.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
/* SHARED COMPONENTS: */
import { SharedModule } from '../shared/shared.module';

import { InicioPageRoutingModule } from './inicio-routing.module';

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
    DelitoComponent,
    SidebarComponent
  /* TODOS LOS COMPONENTES NUEVOS VAN AQUI: */
  ]
})
export class InicioPageModule {}
