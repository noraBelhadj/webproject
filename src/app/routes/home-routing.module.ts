import { HomeComponent } from '../components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

export const homeRoutes = [
  { path:'',  redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class HomeRoutingModule {}