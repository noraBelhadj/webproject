import { LoginComponent } from '../components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';

export const loginRoutes = [
  { path:'',  redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
]


@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class LoginRoutingModule {}