import { createReducer, on, Action } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { User } from '@ngx-utility/authentication';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthState extends User {
  selectedId?: string | number; // which Auth record has been selected
  error?: string | null; // last none error (if any)
  loginAttempts: number;
  lockedOut: boolean;
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  // set initial required properties
  loginAttempts: 0,
  lockedOut: false
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.loginRequest, state => ({
    ...state,
    error: null,
    loginAttempts: state.loginAttempts + 1
  })),
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error: error,
    lockedOut: state.loginAttempts >= 3
  })),
  on(AuthActions.clearError, state => ({
    ...state,
    error: null
  })),
  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    ...user
  }))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
