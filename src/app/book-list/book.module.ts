import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';


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

      }
    ])
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
  ],
  providers: []
})
export class BookModule { }
