import { User } from '../../modules/auth/resources/auth';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
    fromAuth.authFeatureKey
);

export const selectUserData = createSelector(
    selectAuthState,
    state => state.user
);


   