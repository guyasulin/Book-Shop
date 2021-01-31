import { BookApiService } from './../resources/book-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromBookActions from '../state/book.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  model: any = {};

  constructor(
    private service: BookApiService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>

  ) { }

  ngOnInit(): void {
    this.service
    .getBook(this.route.snapshot.paramMap.get('id'))
    .subscribe((book) => (this.model = book));
  }

  onSubmit() {
    this.store.dispatch(
      fromBookActions.upsertBook({ book: this.model })
    );
  }
}
