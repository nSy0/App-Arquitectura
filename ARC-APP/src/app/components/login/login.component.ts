import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

/************************************************************************/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
/************************************************************************/
/************************************************************************/
export class LoginComponent  implements OnInit {

/* VARIABLES: */  
  email: string = "";
  password: string ="";
/* VARIABLES: */  


/************************************************************************/
/************************************************************************/
  constructor(private authService: AuthService, private router: Router) { }
/************************************************************************/

  ngOnInit() {}

  async login(){
    try{
      await this.authService.login(this.email, this.password);
      alert("¡Logeado exitosamente!");
      this.router.navigate(["/inicio"]);
    }catch(error){alert("¡Error al logear!"+error)}
  }//END LOGIN;

/************************************************************************/

  async registrar(){
    try{
      await this.authService.registrar(this.email, this.password);
      alert("Registrado exitosamente!"+this.email);
    }catch(error){alert("¡Error al registrar!"+error)}
  }//END REGISTRAR



/************************************************************************/
}//END LoginComponent;
