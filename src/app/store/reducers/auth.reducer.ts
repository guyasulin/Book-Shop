import { currentUser } from './../../../../../Book-Shop/src/middlewares/current-user';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/auth';
import * as  AuthActions from'../actions/auth.actions'

export const authFeatureKey = 'auth';

export interface State {
  user: User,
  error:any;
}

export const initialState: State = {
  user: {
    id: null,
    email: null,
    admin: null,
    purchasedBooks: null,
  }, 
  error:null
};


export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null
    }
  }),

  on(AuthActions.getUserSuccess, (state, action) => {
    return {
      ...state,
      user: action.currentUser,
      error: null
    }
  }),


  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        email: null,
        admin: null,
        purchasedBooks: null,
      },
      error: action.error
    }
  }),

  on(AuthActions.registerSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null
    }
  }),

  on(AuthActions.registerFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        email: null,
        admin: null,
        purchasedBooks: null,
      },
      error: action.error
    }
  }),

  on(AuthActions.logoutSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null
    }
  }),
);

