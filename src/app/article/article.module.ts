import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ArticleListComponent } from './article-list.component';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleEditComponent } from './article-edit.component';
import { NgxMdModule } from 'ngx-md';
@NgModule({
  imports: [
    FormsModule,
    NgxMdModule.forRoot(),
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
    ArticleEditComponent,
  ],
  providers: []
})
export class ArticleModule { }
