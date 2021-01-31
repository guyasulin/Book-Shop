import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
    fromAuth.authFeatureKey
);

export interface AuthLinksViewModel {
    isAdmin: boolean,
    isLoggedin: boolean,
}

export const selectUserData = createSelector(
    selectAuthState,
    state => state.user
);

export const selectIsLoggedIn = createSelector(
    selectAuthState,
    (state: fromAuth.State) => state.user.id != null
);

export const selectIsAdmin = createSelector(
    selectAuthState,
    (state: fromAuth.State) => state.user.admin
  );

  export const selectAuthLinksViewModel = createSelector(
    selectIsAdmin,
    selectIsLoggedIn,
    (isAdmin: boolean, isLoggedIn: boolean): AuthLinksViewModel => { 
      return {
        isAdmin: isAdmin,
        isLoggedin: isLoggedIn,
      }
    }
   );

   