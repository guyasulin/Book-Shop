import { BookApiService } from './../resources/book-api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as fromBookActions from '../state/book.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit,OnDestroy {

  public model: any = {};
  public sub: Subscription;

  constructor(
    private service: BookApiService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>

  ) { }

  ngOnInit(): void {
   this.sub = this.service
    .getBook(this.route.snapshot.paramMap.get('id'))
    .subscribe((book) => (this.model = book));
  }

  onSubmit() {
    this.store.dispatch(
      fromBookActions.upsertBook({ book: this.model })
    );
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
