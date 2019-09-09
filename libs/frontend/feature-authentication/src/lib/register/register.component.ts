import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  clearError,
  registerFailure,
  registerRequest
} from '../+state/auth.actions';
import { AuthState } from '../+state/auth.reducer';
import { getAuthError } from '../+state/auth.selectors';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  registerForm = new FormControl('');

  errorMessage$ = this.store.pipe(select(getAuthError));

  constructor(private readonly store: Store<{ auth: AuthState }>) {}

  submit() {
    if (!this.registerForm.valid) {
      this.store.dispatch(registerFailure({ error: 'Form is invalid.' }));
    } else {
      this.store.dispatch(
        registerRequest({ userRegister: this.registerForm.value })
      );
    }
  }

  clearErrorMessage() {
    this.store.dispatch(clearError());
  }
}
