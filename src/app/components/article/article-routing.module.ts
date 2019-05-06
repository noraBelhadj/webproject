
import { Routes, RouterModule } from '@angular/router';
import { NgModule }             from '@angular/core';
import { ArticleComponent }     from './article.component';

export const articlesRoutes = [
  { path: '', 
    component: ArticleComponent,
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(articlesRoutes)
  ]
})
export class ArticleRoutingModule {}