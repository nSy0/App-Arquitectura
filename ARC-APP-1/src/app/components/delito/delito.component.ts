import { Component, OnInit } from '@angular/core';
import { DelitosService, Delito } from '../../services/delitos.service';  
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
/************************************************************************/
/************************************************************************/
@Component({
  selector: 'app-delito',
  templateUrl: './delito.component.html',
  styleUrls: ['./delito.component.scss'],
})
/************************************************************************/
export class DelitoComponent  implements OnInit {
/************************************************************************/
  delito: Delito = {
    num_delito: 0,
    nombre_vic: "",
    direc_delito: "",
    tipo_transporte: "",
    desc_delin: "",
    fecha_delito: "",
  }

  userName: string = '';
/************************************************************************/
/************************************************************************/
  constructor(
    private delitoSvc: DelitosService,
    private authSvc:AuthService, 
    private router: Router
  ) { }
/************************************************************************/
  ngOnInit() {}
/************************************************************************/
/************************************************************************/ 
  addDelito(){
    this.delitoSvc.addDelito(this.delito).then(()=>{
      alert("¡Informe guardado correctamente!")

      this.delito = {
        num_delito: 0,
        nombre_vic: "",
        direc_delito: "",
        tipo_transporte: "",
        desc_delin: "",
        fecha_delito: "",
      }

    }).catch(error=>{alert("Error al agregar"+error)})
  }
/************************************************************************/ 
/************************************************************************/ 
  logout(){
    this.authSvc.logout();
    alert("¡Sesión temrinada!")
    this.router.navigate(['/home'])
  }
/************************************************************************/ 
/************************************************************************/ 
  centralAnalisis(){
    this.delitoSvc.centralAnalisis();
    alert("¡Informe enviado a central de analísis!")
  }
}//END DelitoComponent;

function PopoverContentComponent(): import("@ionic/core").ComponentRef {
  throw new Error('Function not implemented.');
}

