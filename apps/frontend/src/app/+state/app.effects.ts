import { VideoChatComponent } from './../../../../../libs/frontend/feature-video-chat/src/lib/video-chat/video-chat.component';
import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { AppPartialState } from './app.reducer';
import * as AppActions from './app.actions';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AppEffects {
  loadApp$ = createEffect(() =>
    this.dataPersistence.fetch(AppActions.loadApp, {
      run: (
        action: ReturnType<typeof AppActions.loadApp>,
        state: AppPartialState
      ) => {
        console.log('app loaded');
        // Your custom service 'load' logic goes here. For now just return a success action...
        return AppActions.loadAppSuccess({ app: [] });
      },

      onError: (action: ReturnType<typeof AppActions.loadApp>, error) => {
        console.error('Error', error);
        return AppActions.loadAppFailure({ error });
      }
    })
  );

  showSecondSideNav$ = createEffect(() =>
    this.dataPersistence.navigation(VideoChatComponent, {
      run: (action: ActivatedRouteSnapshot, state: AppPartialState) => {
        console.log(action.fragment);
        console.log(action);
        if (action.paramMap.get('friends') || action.paramMap.get('recent')) {
          return AppActions.showSecondSideNav();
        }
      },

      onError: (action: ActivatedRouteSnapshot, error) => {
        console.error('Error', error);
        return AppActions.criticalError({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<AppPartialState>
  ) {}
}
