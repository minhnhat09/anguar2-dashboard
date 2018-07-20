import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, AfterContentInit {
  book: Book;
  imageWidth = 200;
  imageMargin = 2;
  bookComment = ''
  bookUrl = 'http://lorempixel.com/300/400';
  constructor(private bookService: BookService,
    private route: ActivatedRoute) {
    console.log('constructor');

  }

  ngOnInit() {
    console.log('ngoninit');
    const bookId = this.route.snapshot.params.id;
    console.log('bookid', bookId);
    this.book = this.bookService.getBookById(bookId);
    // this.bookComment = this.book.comment;
    this.bookComment = '## des <br>';
    this.bookComment += '# crip';
  }
  ngAfterContentInit() {
    
  }
}
