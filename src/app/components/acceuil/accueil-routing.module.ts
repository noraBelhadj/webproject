import { AcceuilComponent } from './acceuil.component';
import { SubscribeComponent } from './../subscribe/subscribe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

export const accueilRoutes = [
  { path: '', 
    component: AcceuilComponent,
    children:[
         {path:'test',
          component:SubscribeComponent
         }]
  },
   { path: 'subscribe', 
    component: SubscribeComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(accueilRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AccueilRoutingModule {}