import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';  

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate:[authGuard]/* AGREGAR CADA VEZ QUE HAGA NUEVA PAGINA  */
  },
  {
    path: 'listar-delitos',
    loadChildren: () => import('./listar-delitos/listar-delitos.module').then( m => m.ListarDelitosPageModule)
  },
  {
    path: 'report-modal',
    loadChildren: () => import('./report-modal/report-modal.module').then( m => m.ReportModalPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
