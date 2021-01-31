import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from '../../../app/modules/auth/resources/auth';
import { AppState } from '../../store';
import * as fromAuthSelectors from '../../store/selectors/auth.selectors';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit, OnDestroy {
	public user: User;
	public sub: Subscription;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.sub = this.store.pipe(select(fromAuthSelectors.selectUserData)).subscribe((res) => {
			this.user = res;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
