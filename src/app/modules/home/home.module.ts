import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from '../../components/home/home.component';
import { HomeRoutingModule} from '../../routes/home-routing.module';
//import { AuthRoutes as routes } from '../../routes/auth.route';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HomeRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
