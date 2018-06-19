import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookEditComponent } from './book-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'book-edit',
        component: BookEditComponent

      },
      {
        path: ':id',
        component: BookDetailComponent

      },
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
