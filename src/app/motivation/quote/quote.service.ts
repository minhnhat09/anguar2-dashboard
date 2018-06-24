import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Quote } from './quote.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class QuoteService {

  private quotesUrl = 'api/quotes';  // URL to web api
  public quotes: Quote[] = [];
  constructor(
    private http: HttpClient) { }

  /** GET heroes from the server */
  getQuotes(): Observable<Quote[]> {
    return this.http.get<Quote[]>(this.quotesUrl)
      .pipe(
        map(res => {
          this.quotes = res;
          return res;
        })
      );
  }

  initiateQuote(): Quote {
    const quote: Quote = {
      id: 0,
      content: '',
      author: ''
    }
    return quote;
  }

  /**
   * TODO: fix after desgin
   * Methode temporary
   * @param quoteId
   */
  getQuoteById(quoteId: number) {
    return this.quotes.find((b: Quote) => b.id === quoteId);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
