import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookEditComponent } from './book-edit.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent
      },
      {
        path: ':id',
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
