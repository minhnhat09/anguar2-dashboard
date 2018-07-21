import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  constructor(private bookService: BookService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getBooks();
  }
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(res => {
        this.books = res;
      });
  }
}
