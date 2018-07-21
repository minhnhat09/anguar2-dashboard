import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BookService } from './book.service';
import { Book } from '../interfaces/book.interface';

@Injectable()
export class BookResolver implements Resolve<Book> {

    constructor(private bookService: BookService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
        const bookId = route.params['id'];
        console.log(bookId);
        const book = this.bookService.getBookById(bookId);
        return Observable.of(book);
    }
}
