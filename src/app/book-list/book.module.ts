import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookEditComponent } from './book-edit.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'book-detail',
        component: BookDetailComponent

      },
      {
        path: 'book-edit',
        component: BookEditComponent

      }
    ])
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookEditComponent,
  ],
  providers: []
})
export class BookModule { }
