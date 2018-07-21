import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Book, Tag } from './interfaces/book.interface';
import { Router, ActivatedRoute } from '@angular/router';
// SERVICES
import { BookService } from './service/book.service';
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
  constructor(private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
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
      // TODO: them condition cho tag, commment
    });
    this.route.data.subscribe(data => {
      if (data.book) {
        this.book = data['book'];
        console.log(this.book);
        console.log(this.bookForm);
        this.bookForm.setValue({
          bookName: this.book.bookName,
          author: this.book.author,
          category: this.book.category,
          bookImageUrl: this.book.bookImageUrl,
          ebook: this.book.source.ebook,
          audio: this.book.source.audio,
          paper: this.book.source.ebook,
        });
      }
    });
  }
  public removeTag(i) {
    this.tags.splice(i, 1);
  }
  public createOrUpdateBook() {
    this.book = Object.assign(this.book, {
      ...this.bookForm.value,
      comments: [this.bookForm.value.comment]
    });
    console.log(this.book);
    if (this.book.id === '0') {
      this.bookService.createBook(this.book)
        .then(response => {
          const body = response.json();
          this.router.navigate(['/book-list']);
        })
        .catch(this.handleErrorPromise);
    } else {
      this.bookService.updateBook(this.book.id, this.book)
        .then(response => {
          const body = response.json();
          this.router.navigate(['/book-list']);
        })
        .catch(this.handleErrorPromise);
    }
  }
  handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
  onTagKeydown(event) {
    if (event.key === 'Enter' && event.target.value) {
      const tag: Tag = {
        name: event.target.value,
        className: this.classNames[Math.floor((Math.random() * 5))]
      }
      this.book.tags.push(tag);
      event.target.value = '';
    }
  }
}
