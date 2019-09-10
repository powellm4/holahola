import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  VIDEOCHAT_FEATURE_KEY,
  VideoChatState,
  VideoChatPartialState,
  videoChatAdapter
} from './video-chat.reducer';

// Lookup the 'VideoChat' feature state managed by NgRx
export const getVideoChatState = createFeatureSelector<
  VideoChatPartialState,
  VideoChatState
>(VIDEOCHAT_FEATURE_KEY);

const { selectAll, selectEntities } = videoChatAdapter.getSelectors();

export const getVideoChatLoaded = createSelector(
  getVideoChatState,
  (state: VideoChatState) => state.loaded
);

export const getVideoChatError = createSelector(
  getVideoChatState,
  (state: VideoChatState) => state.error
);

export const getAllVideoChat = createSelector(
  getVideoChatState,
  (state: VideoChatState) => selectAll(state)
);

export const getVideoChatEntities = createSelector(
  getVideoChatState,
  (state: VideoChatState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getVideoChatState,
  (state: VideoChatState) => state.selectedId
);

export const getSelected = createSelector(
  getVideoChatEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
