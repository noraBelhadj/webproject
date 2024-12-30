import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { HomeComponent } from './home.component';
import {SharedModule} from '../../shard/index'
import { routes } from './home-routing.module';

@NgModule({
  declarations: [
    
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}
