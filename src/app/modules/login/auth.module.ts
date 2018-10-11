import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { LoginComponent } from '../../components/login/login.component';
import { HomeComponent } from '../../components/home/home.component';
//import { AuthRoutes as routes } from '../../routes/auth.routes';
import { SharedModule } from '../../shard/index'; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
]),
    SharedModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
