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
  delito:Delito = {
    nombre_vic: "",
    direc_delito: "",
    tipo_transporte: "",
    desc_delin: "",
    dia: 0,
    mes: 0,
    anio: 0
  }
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
      alert("¡Informe enviado correctamente!")

      this.delito = {
        nombre_vic: "",
        direc_delito: "",
        tipo_transporte: "",
        desc_delin: "",
        dia: 0,
        mes: 0,
        anio: 0
      }

    }).catch(error=>{alert("Error al agregar"+error)})
  }

  logout(){
    this.authSvc.logout();
    alert("¡Sesión temrinada!")
    this.router.navigate(['/home'])
  }
}//END DelitoComponent;
