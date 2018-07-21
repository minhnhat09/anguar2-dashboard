import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; import { Observable, of } from 'rxjs';
import { RequestOptions, Headers, Http, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Book } from './interfaces/book.interface';
import { ToastrService } from 'ngx-toastr';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BookService {

  private booksUrl = 'api/books';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json',
    // tslint:disable-next-line:max-line-length
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1YjM3NGU5ZjNiMTZlODRmYTQ1YmQ5MjUiLCJpYXQiOjE1MzIxMTI4MTQxNTh9.XxGSHtJWnbsz-aFFjiJDkF5e1J7nr_w_AFUKLZbLiLI'
  });
  public books: Book[] = [];
  constructor(private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private http: Http) { }

  /** GET heroes from the server */
  getBooks(): any {
    this.books = [];
    const options = new RequestOptions({ headers: this.headers });
    // return this.http.get(this.booksUrl, options)
    this.spinner.show();
    return this.http.get(this.booksUrl, options)
      .pipe(
        map(response => {
          const booksResponse = response.json();
          booksResponse.map((bookRes) => {
            const book: Book = {
              ...bookRes,
              id: bookRes._id
            }
            this.books.push(book);
          })
          this.spinner.hide();
          return this.books;
        }));
  }

  deleteBook(bookId: string) {
    const options = new RequestOptions({
      headers: this.headers
    });
    // return this.http.get(this.booksUrl, options)
    return this.http.delete(`${this.booksUrl}/deleteBook/${bookId}`, options)
      .toPromise()
      .then(response => {
        if (response.status === 200) {
          this.toastr.success('Delete book ok', 'Information', {
            positionClass: 'toast-top-right'
          });
          this.books.splice(this.books.findIndex((b: Book) => b.id === bookId), 1)
        }
      })
      .catch(this.handleErrorPromise);
  }
  createBook(newBook): Promise<any> {
    const options = new RequestOptions({
      method: RequestMethod.Post,
      headers: this.headers
    });
    // return this.http.get(this.booksUrl, options)
    return this.http.post(this.booksUrl, newBook, options)
      .toPromise();
  }

  handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  initiateBook(): Book {
    const book: Book = {
      id: '0',
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
      return b.id === bookId;
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
