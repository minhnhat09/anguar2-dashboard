import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Book } from './interfaces/book.interface';
// SERVICES
import { BookService } from './book.service';
@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  public bookForm: FormGroup;
  public book: Book;
  public tags: string[] = [];
  public classNames: string[] = [
    'primary',
    'success',
    'info',
    'warning',
    'danger'
  ]
  constructor(private bookService: BookService) {
    this.book = bookService.initiateBook();
  }
  public ngOnInit() {
    this.bookForm = new FormGroup({
      bookName: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      bookImageUrl: new FormControl('', Validators.required)
    });
  }

  public createOrUpdateBook() {
    console.log(this.bookForm);
  }
  onTagKeydown(event) {
    if (event.key === 'Enter' && event.target.value) {
      const tag = event.target.value;
      this.tags.push(tag);
      event.target.value = '';
    }
  }
}
