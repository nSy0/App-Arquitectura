import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DelitosService, Delito } from '../services/delitos.service';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.page.html',
  styleUrls: ['./report-modal.page.scss'],
})
export class ReportModalPage implements OnInit {

  @Input() report: any; // Recibe el reporte desde el modal

  delito: Delito[]=[]

  constructor(
    private modalCtr: ModalController,
    private delitoSvc: DelitosService,) {}

  ngOnInit() {
    this.delitoSvc.getDelito().subscribe(delito =>{
      this.delito = delito;
    })
    this.loadMap();  // Cargar el mapa cuando el modal se abre
  }
  

  closeModal() {
    this.modalCtr.dismiss();
  }

  loadMap() {
    // Aquí va el código para inicializar el mapa, por ejemplo, con Google Maps
    const mapOptions = {
      center: { lat: -34.6037, lng: -58.3816 }, // Coordenadas de ejemplo
      zoom: 14,
    };
    //const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Puedes agregar más opciones o marcadores al mapa aquí
  }

}
