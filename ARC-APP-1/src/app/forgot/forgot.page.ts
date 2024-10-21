import { Component, OnInit, inject } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

/* VARIABLES: */  
email: string = "";
/* VARIABLES: */  
/************************************************************************/
constructor(
  private firebaseSvc: FirebaseService, 
  private router: Router,
  ) { }
/************************************************************************/

  ngOnInit() {
  }

  async recuperar(){
    try{
      await this.firebaseSvc.sendRecoveryEmail(this.email);
      alert("Correo enviado exitosamente!"+this.email);
      this.router.navigate(["/home"]);
    }catch(error){alert("¡Error al recuperar!"+error)}
  }//END recuperar;
/************************************************************************/
}//END ForgotPage;
