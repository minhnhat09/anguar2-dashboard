import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; import { Observable, of } from 'rxjs';
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
    private http: HttpClient) { }

  /** GET heroes from the server */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        map(res => {
          this.books = res;
          return res;
        })
      );
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
  getBookById(bookId: number) {
    return this.books.find((b: Book) => b.id === bookId);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
