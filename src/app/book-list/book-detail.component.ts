import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const bookId = this.route.snapshot.params.id;
    this.book = this.bookService.getBookById(Number(bookId));
  }
}
