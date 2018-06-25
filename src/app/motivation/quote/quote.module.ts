import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { QuoteListComponent } from './quote-list.component';
import { CalendarComponent } from './calendar.component';
import { DateTimePickerComponent } from './date-time-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import {
  NgbDatepickerModule,
  NgbTimepickerModule
} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    CalendarModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: QuoteListComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      }
    ])
  ],
  declarations: [
    QuoteListComponent,
    CalendarComponent,
    DateTimePickerComponent
  ],
  providers: []
})
export class QuoteModule { }
