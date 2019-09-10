import { createAction, props } from '@ngrx/store';
import { VideoChatEntity } from './video-chat.models';

export const loadVideoChat = createAction('[VideoChat] Load VideoChat');

export const loadVideoChatSuccess = createAction(
  '[VideoChat] Load VideoChat Success',
  props<{ videoChat: VideoChatEntity[] }>()
);

export const loadVideoChatFailure = createAction(
  '[VideoChat] Load VideoChat Failure',
  props<{ error: any }>()
);
