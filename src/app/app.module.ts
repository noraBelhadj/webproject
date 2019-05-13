import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 


//import { LoginRoutingModule }      from './app.routes';

import { AppComponent } from './app.component';
//import { HomeComponent } from './components/home/home.component';
//import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/authentification.service';
import { HttpService } from './services/http';

import { routes } from './app.routes';
//import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { reducer } from './app.reducers';
import { HeaderComponent } from './components/header/header.component';
//import { ArticleComponent } from './components/article/article.component';
//import { SubscribeComponent } from './components/subscribe/subscribe.component';
//import { LoginRoutingModule }      from './routes/login-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //ArticleComponent,
    //AcceuilComponent,
    //SubscribeComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducer),
  // LoginRoutingModule

  ],
  providers: [AuthService, HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
