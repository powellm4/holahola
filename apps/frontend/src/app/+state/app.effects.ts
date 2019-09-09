import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AppPartialState } from './app.reducer';
import * as AppActions from './app.actions';

@Injectable()
export class AppEffects {
  loadApp$ = createEffect(() =>
    this.dataPersistence.fetch(AppActions.loadApp, {
      run: (
        action: ReturnType<typeof AppActions.loadApp>,
        state: AppPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return AppActions.loadAppSuccess({ app: [] });
      },

      onError: (action: ReturnType<typeof AppActions.loadApp>, error) => {
        console.error('Error', error);
        return AppActions.loadAppFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppPartialState>
  ) {}
}
