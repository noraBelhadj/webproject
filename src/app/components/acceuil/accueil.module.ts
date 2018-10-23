import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AcceuilComponent } from '../../components/acceuil/acceuil.component';
import { AccueilRoutingModule} from './accueil-routing.module';
import { SubscribeComponent}   from './../subscribe/subscribe.component'

//import { AuthRoutes as routes } from '../../routes/auth.route';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccueilRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  declarations: [
    AcceuilComponent,
    SubscribeComponent
  ]
})
export class AccueilModule { }
