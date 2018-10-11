import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


// Components
import { HomeComponent } from './home.component';
import { routes } from './home-routing.module';

@NgModule({
  declarations: [
    // components
    HomeComponent,
 
  ],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
  ]
})
export class HomeModule {}
