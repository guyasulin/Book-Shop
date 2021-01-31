import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../../../store';
import { User } from '../resources/auth';
import * as fromAuthSelectors from '../../../store/selectors/auth.selectors';
import * as fromAuthAction from '../../../store/actions/auth.actions';

@Component({
	selector: 'app-auth-links',
	templateUrl: './auth-links.component.html',
	styleUrls: [ './auth-links.component.scss' ]
})
export class AuthLinksComponent implements OnInit, OnDestroy {
	public user: User;
	public sub: Subscription;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.store.dispatch(fromAuthAction.getUser());
		this.sub = this.store.pipe(select(fromAuthSelectors.selectUserData)).subscribe((res) => {
			this.user = res;
		});
	}

	logout() {
		this.store.dispatch(fromAuthAction.logout());
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
