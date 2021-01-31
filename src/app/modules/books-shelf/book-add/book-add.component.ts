import { BookApiService } from './../resources/book-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromBookActions from '../state/book.actions';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  constructor(
    private bookService: BookApiService,
    private router: Router,
    private store: Store<AppState>

  ) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.store.dispatch(
      fromBookActions.addBook({ book: f.value })
    );
  }
}
