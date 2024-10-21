import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
/* COMPONENTES: */
import { LoginComponent } from '../components/login/login.component';
/* SHARED COMPONENTS: */
import { SharedModule } from '../shared/shared.module';
/* SHARED COMPONENTS: */


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  /* IMPORTA LOS SHARED:  */ 
    SharedModule
  ],
  declarations: [
  /* TODOS LOS COMPONENTES NUEVOS VAN AQUI: */  
    HomePage, 
    LoginComponent
  /* TODOS LOS COMPONENTES NUEVOS VAN AQUI: */
  ]
})
export class HomePageModule {}
