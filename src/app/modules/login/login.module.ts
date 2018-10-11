import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoginComponent } from '../../components/login/login.component';
import { LoginRoutingModule} from '../../routes/login-routing.module';
//import { AuthRoutes as routes } from '../../routes/auth.route';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
