import { createAction, props } from '@ngrx/store';
import { UserLogin, User, UserRegister } from '@ngx-utility/authentication';

export const loadAuth = createAction('[Auth] Load Auth');
export const loadAuthSuccess = createAction('[Auth] Load Success');
export const loadAuthFailure = createAction(
  '[Auth] Load Failure',
  props<{ error: any }>()
);

export const clearError = createAction('[Auth] Clear Error');

export const loginRequest = createAction(
  '[Auth] Login Request',
  props<{ userLogin: UserLogin }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const registerRequest = createAction(
  '[Auth] Register Request',
  props<{ userRegister: UserRegister }>()
);

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<{ error: any }>()
);

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ user: User }>()
);
