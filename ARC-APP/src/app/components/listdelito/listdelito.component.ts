import { Component, OnInit } from '@angular/core';
import { DelitosService, Delito } from '../../services/delitos.service';  
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ReportModalPage } from '../../report-modal/report-modal.page';

@Component({
  selector: 'app-listdelito',
  templateUrl: './listdelito.component.html',
  styleUrls: ['./listdelito.component.scss'],
})
export class ListdelitoComponent  implements OnInit {

  delito: Delito[]=[]

  constructor(
    private delitoSvc: DelitosService,
    private authSvc:AuthService, 
    private router: Router,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.delitoSvc.getDelito().subscribe(delito =>{
      this.delito = delito;
    })
  }

  logout(){
    this.authSvc.logout();
    alert("¡Sesión temrinada!")
    this.router.navigate(['/home'])
  }

  async openModal(delito: any) {
    const modal = await this.modalCtrl.create({
      component: ReportModalPage,  // Página que actuará como modal
      componentProps: {
        'delito': delito // Pasar el reporte seleccionado al modal
      }
    });
    return await modal.present();
  }

}//END ListdelitoComponent;
