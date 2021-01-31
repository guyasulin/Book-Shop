import { AuthService } from './../../modules/auth/resources/auth.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthActions from '../actions/auth.actions';
import {  map, concatMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
	getUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(fromAuthActions.getUser),
			concatMap(() =>
				this.authService
					.getUser().pipe(
						map(
							(currentUser) => fromAuthActions.getUserSuccess(currentUser),
							catchError((error) => of(fromAuthActions.getUserFailure({ error })))
						)
					)
			)
		)
	);
	
	constructor(private actions$: Actions, private authService: AuthService) {}
}
