import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
//import { CanActivateViaAuthGuard } from './guards/auth.guard';




export const routes : Routes = [
{
    path: 'auth',
    loadChildren: './modules/login/auth.module#AuthModule'
  },
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
      path: 'accueil',
      component : AcceuilComponent,
  }
];


