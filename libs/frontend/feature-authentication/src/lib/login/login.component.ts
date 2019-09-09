import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { getAuthError } from '../+state/auth.selectors';
import { select, Store } from '@ngrx/store';
import { AuthState } from '../+state/auth.reducer';
import { loginFailure, clearError, loginRequest } from '../+state/auth.actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  loginForm = new FormControl('');

  errorMessage$ = this.store.pipe(select(getAuthError));

  constructor(private readonly store: Store<{ auth: AuthState }>) {}

  submit() {
    if (!this.loginForm.valid) {
      this.store.dispatch(loginFailure({ error: 'Form is invalid.' }));
    } else {
      this.store.dispatch(loginRequest({ userLogin: this.loginForm.value }));
    }
  }

  clearErrorMessage() {
    this.store.dispatch(clearError());
  }
}
