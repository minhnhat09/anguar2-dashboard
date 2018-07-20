import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Book, Tag } from './interfaces/book.interface';
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
  public tags: Tag[] = [];
  public classNames: string[] = [
    'badge-primary',
    'badge-success',
    'badge-info',
    'badge-warning',
    'badge-danger'
  ];
  constructor(private bookService: BookService) {
    this.book = bookService.initiateBook();
  }
  public ngOnInit() {
    this.bookForm = new FormGroup({
      bookName: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      bookImageUrl: new FormControl('', Validators.required),
      ebook: new FormControl(false),
      audio: new FormControl(false),
      paper: new FormControl(false),
      comment: new FormControl('')
      // TODO: them condition cho tag
    });
  }
  public removeTag(i) {
    this.tags.splice(i, 1);
  }
  public createOrUpdateBook() {
    console.log(this.bookForm);
    const book = {
      ...this.bookForm.value,
      comments: [this.bookForm.value.comment],
      tags: this.tags
    };
    console.log(book);
    this.bookService.createBook(book);
  }

  onTagKeydown(event) {
    if (event.key === 'Enter' && event.target.value) {
      const tag: Tag = {
        name: event.target.value,
        className: this.classNames[Math.floor((Math.random() * 5))]
      }
      this.tags.push(tag);
      event.target.value = '';
    }
  }
}
