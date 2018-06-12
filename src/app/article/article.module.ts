import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleListComponent } from './article-list.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleEditComponent } from './article-edit.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ArticleListComponent
      },
      {
        path: 'article-detail',
        component: ArticleDetailComponent
      },
      {
        path: 'article-edit',
        component: ArticleEditComponent
      }
    ])
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  providers: []
})
export class ArticleModule { }
