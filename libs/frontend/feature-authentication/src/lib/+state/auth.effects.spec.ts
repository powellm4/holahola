import { AuthService } from '@ngx-utility/authentication';
import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { AuthEffects } from './auth.effects';
import * as AuthActions from './auth.actions';

describe('AuthEffects', () => {
  let actions: Observable<any>;
  let effects: AuthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AuthEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
        {
          provide: AuthService,
          useExisting: null
        }
      ]
    });

    effects = TestBed.get(AuthEffects);
  });

  describe('loadAuth$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AuthActions.loadAuth() });

      const expected = hot('-a-|', {
        a: AuthActions.loadAuthSuccess()
      });

      expect(effects.loadAuth$).toBeObservable(expected);
    });
  });
});
