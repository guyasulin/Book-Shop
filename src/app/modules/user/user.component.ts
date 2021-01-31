import { Observable, Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import * as fromAuthSelector from '../../store/selectors/auth.selectors';
import { User } from '../auth/resources/auth';
import * as fromAuthAction from '../../store/actions/auth.actions';
import { BookApiService } from '../books-shelf/resources/book-api.service';
import { Book } from '../books-shelf/resources/book';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.scss' ]
})
export class UserComponent implements OnInit, OnDestroy {
	public user: User;
	public purchasesBooks: Book[];
	public sub: Subscription;

	constructor(
		private store: Store<AppState>, 
		private bookService: BookApiService) {}

	ngOnInit(): void {
		this.store.dispatch(fromAuthAction.getUser());
		this.sub = this.store.pipe(select(fromAuthSelector.selectUserData)).subscribe((res) => {
			this.user = res;
		});

		this.sub = this.bookService.getPurchasesBooks().subscribe((res) => {
			this.purchasesBooks = res;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
