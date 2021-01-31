import { BookApiService } from './resources/book-api.service';
import { AppState } from '../../store';
import { Book } from './resources/book';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromBookAction from './state/book.actions';
import { getbooks } from './state/book.selectors';
import { AlertService } from 'ngx-alerts';

@Component({
  selector: 'app-books-shelf',
  templateUrl: './books-shelf.component.html',
  styleUrls: ['./books-shelf.component.scss']
})
export class BooksShelfComponent implements OnInit {
 public books$: Observable<Book[]>

  constructor(
    private store: Store<AppState>,
    private bookService: BookApiService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
      this.store.dispatch(fromBookAction.loadBooks())
      this.getBooks()
  }

  getBooks() {
      this.books$ = this.store.pipe(select(getbooks))
  }

  buyBook(bookId) {
    const bookIdObservable = {
      next: (bookId) => {
        setTimeout(() => {
          this.alertService.info('Book purchased');
        }, 1000)
      },
      error: (err) => {
        setTimeout(() => {
          this.alertService.info('This book was purchased');
        }, 2000)
      },
    };
    this.bookService.purchasesBookById(bookId).subscribe(bookIdObservable)
  }
  
}
