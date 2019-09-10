import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as VideoChatActions from './video-chat.actions';
import { VideoChatEntity } from './video-chat.models';

export const VIDEOCHAT_FEATURE_KEY = 'videoChat';

export interface VideoChatState extends EntityState<VideoChatEntity> {
  selectedId?: string | number; // which VideoChat record has been selected
  loaded: boolean; // has the VideoChat list been loaded
  error?: string | null; // last none error (if any)
}

export interface VideoChatPartialState {
  readonly [VIDEOCHAT_FEATURE_KEY]: VideoChatState;
}

export const videoChatAdapter: EntityAdapter<
  VideoChatEntity
> = createEntityAdapter<VideoChatEntity>();

export const initialState: VideoChatState = videoChatAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const videoChatReducer = createReducer(
  initialState,
  on(VideoChatActions.loadVideoChat, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(VideoChatActions.loadVideoChatSuccess, (state, { videoChat }) =>
    videoChatAdapter.addAll(videoChat, { ...state, loaded: true })
  ),
  on(VideoChatActions.loadVideoChatFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: VideoChatState | undefined, action: Action) {
  return videoChatReducer(state, action);
}
