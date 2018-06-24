import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuoteListComponent } from './quote-list.component';
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
        component: QuoteListComponent
      }
    ])
  ],
  declarations: [
    QuoteListComponent,
  ],
  providers: []
})
export class QuoteModule { }
