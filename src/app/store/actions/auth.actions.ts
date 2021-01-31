import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/auth';

export const login = createAction(
  '[Auth] Load Auths',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);

export const register = createAction(
  '[Auth] Register Auths',
  props<{ email: string; password: string }>()
);

export const registerSuccess = createAction(
  '[Auth] Load Register Success',
  props<{ user: User }>()
);

export const registerFailure = createAction(
  '[Auth] Register Auths Failure',
  props<{ error: any }>()
);

export const logout = createAction(
  '[Auth Links Component] Logout User'
);

export const logoutSuccess = createAction(
  '[Auth Links Component] Logout Success',
  props<{ user: User }>()
);

export const  logoutFailure = createAction(
  '[Auth]  Logout  Failure',
  props<{ error: any }>()
);

export const browserReload = createAction(
  '[Auth Component] Browser Reload',
  props<{ user: User }>()
);

export const getUser = createAction(
  '[Auth Component] Get User',
);

export const getUserSuccess = createAction(
  '[Auth Component] User Success',
  props<{ currentUser: any }>()
);

export const getUserFailure = createAction(
  '[Auth Component]  User Failure',
  props<{ error: any }>()
);