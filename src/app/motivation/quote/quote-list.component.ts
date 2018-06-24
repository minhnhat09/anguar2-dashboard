import { Component, OnInit } from '@angular/core';

import { QuoteService } from './quote.service';
import { Quote } from './quote.interface';
@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  quotes: Quote[];
  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.getQuotes();
  }
  getQuotes(): void {
    this.quoteService.getQuotes()
      .subscribe(quotes => {
        this.quotes = quotes;
        console.log(quotes);
      });
  }
}
