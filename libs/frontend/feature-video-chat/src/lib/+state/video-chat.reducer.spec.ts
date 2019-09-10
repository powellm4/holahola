import { VideoChatEntity } from './video-chat.models';
import * as VideoChatActions from './video-chat.actions';
import { VideoChatState, initialState, reducer } from './video-chat.reducer';

describe('VideoChat Reducer', () => {
  const createVideoChatEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as VideoChatEntity);

  beforeEach(() => {});

  describe('valid VideoChat actions', () => {
    it('loadVideoChatSuccess should return set the list of known VideoChat', () => {
      const videoChat = [
        createVideoChatEntity('PRODUCT-AAA'),
        createVideoChatEntity('PRODUCT-zzz')
      ];
      const action = VideoChatActions.loadVideoChatSuccess({ videoChat });

      const result: VideoChatState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
