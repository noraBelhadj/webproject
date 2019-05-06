import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';

import  { ArticleComponent }  from './components/article/article.component';
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
  { path: 'accueil',
    loadChildren:'./components/acceuil/accueil.module#AccueilModule'
  },
  {
     path: '',
     redirectTo: '/accueil',
     pathMatch: 'full'
  },
  {  path: 'article',
     loadChildren: './components/article/article.module#ArticleModule'}
];


