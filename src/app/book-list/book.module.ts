import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookEditComponent } from './book-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMdModule } from 'ngx-md';
import { BookResolver } from './service/book-resolver.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMdModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: BookListComponent
      },
      {
        path: ':id/book-edit',
        component: BookEditComponent,
        resolve: { book: BookResolver }
      },
      {
        path: 'book-detail/:id',
        component: BookDetailComponent
      },
    ])
  ],
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookEditComponent
  ],
  providers: [BookResolver]
})
export class BookModule { }
