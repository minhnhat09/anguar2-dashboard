import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; import { Observable, of } from 'rxjs';
import { RequestOptions, Headers, Http } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from './interfaces/book.interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BookService {

  private booksUrl = 'api/books';  // URL to web api
  public books: Book[] = [];
  constructor(
    private http: Http) { }

  /** GET heroes from the server */
  getBooks(): any {
    const headers = new Headers({
      'Content-Type': 'application/json',
      // tslint:disable-next-line:max-line-length
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjM3NGU5ZjNiMTZlODRmYTQ1YmQ5MjUiLCJpYXQiOjE1MzIxMTI4MTQxNTh9.XxGSHtJWnbsz-aFFjiJDkF5e1J7nr_w_AFUKLZbLiLI'
    });
    const options = new RequestOptions({ headers: headers });
    // return this.http.get(this.booksUrl, options)
    return this.http.get(this.booksUrl, options)
      .pipe(
        map(response => {
          this.books = response.json();
          return this.books;
        }));
  }




  initiateBook(): Book {
    const book: Book = {
      id: 0,
      bookName: '',
      author: '',
      page: 45,
      category: '',
      tags: [],
      bookImageUrl: '',
      comment: '',
      status: '',
      progress: '',
      dateCreate: '',
      dateUpdate: '',
      readTime: '',
      source: {
        audio: false,
        ebook: false,
        paper: false
      }
    }
    return book;
  }

  /**
   * TODO: fix after desgin
   * Methode temporary
   * @param bookId
   */
  getBookById(bookId: string) {
    return this.books.find((b: Book) => {
      return b._id === bookId;
    });
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
