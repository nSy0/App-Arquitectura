import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit() {}

  logout(){
    this.authSvc.logout();
    alert("¡Sesión temrinada!")
    this.router.navigate(['/home'])
  }
}
