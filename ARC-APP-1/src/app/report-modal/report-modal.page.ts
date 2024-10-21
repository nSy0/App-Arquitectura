import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DelitosService } from '../services/delitos.service';
import { NavParams } from '@ionic/angular';
/************************************************************************/
@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.page.html',
  styleUrls: ['./report-modal.page.scss'],
})
/************************************************************************/
export class ReportModalPage implements OnInit {
/************************************************************************/
  @Input() delito: any; // Recibe el reporte desde el modal
  alertController: any;
  

  constructor(
    private modalCtr: ModalController,
    private delitoSvc: DelitosService,
    private navParams: NavParams,
  ) { }

  ngOnInit() {
/************************************************************************/
    const delitoId = this.navParams.get('delitoId');
    if (delitoId) {
      this.delitoSvc.getDelitoById(delitoId).subscribe((delito) => {
        this.delito = delito;
        console.log('Delito cargado:', this.delito); // Log para verificar los datos
      });
    }
/************************************************************************/
}
/************************************************************************/
enviarReporte(){
  this.delitoSvc.enviarReporte();
  alert("¡Informe enviado a Fuerzas Policiales!")
}

/************************************************************************/
  closeModal() {
    this.modalCtr.dismiss();
  }
/************************************************************************/
}//END ReportModalPage;
