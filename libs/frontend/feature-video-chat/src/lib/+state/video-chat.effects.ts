import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { VideoChatPartialState } from './video-chat.reducer';
import * as VideoChatActions from './video-chat.actions';

@Injectable()
export class VideoChatEffects {
  loadVideoChat$ = createEffect(() =>
    this.dataPersistence.fetch(VideoChatActions.loadVideoChat, {
      run: (
        action: ReturnType<typeof VideoChatActions.loadVideoChat>,
        state: VideoChatPartialState
      ) => {
        // Your custom service 'load' logic goes here. For now just return a success action...
        return VideoChatActions.loadVideoChatSuccess({ videoChat: [] });
      },

      onError: (
        action: ReturnType<typeof VideoChatActions.loadVideoChat>,
        error
      ) => {
        console.error('Error', error);
        return VideoChatActions.loadVideoChatFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<VideoChatPartialState>
  ) {}
}
