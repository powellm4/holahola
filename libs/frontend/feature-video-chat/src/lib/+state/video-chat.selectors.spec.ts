import { VideoChatEntity } from './video-chat.models';
import {
  VideoChatState,
  videoChatAdapter,
  initialState
} from './video-chat.reducer';
import * as VideoChatSelectors from './video-chat.selectors';

describe('VideoChat Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getVideoChatId = it => it['id'];
  const createVideoChatEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as VideoChatEntity);

  let state;

  beforeEach(() => {
    state = {
      videoChat: videoChatAdapter.addAll(
        [
          createVideoChatEntity('PRODUCT-AAA'),
          createVideoChatEntity('PRODUCT-BBB'),
          createVideoChatEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('VideoChat Selectors', () => {
    it('getAllVideoChat() should return the list of VideoChat', () => {
      const results = VideoChatSelectors.getAllVideoChat(state);
      const selId = getVideoChatId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = VideoChatSelectors.getSelected(state);
      const selId = getVideoChatId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getVideoChatLoaded() should return the current 'loaded' status", () => {
      const result = VideoChatSelectors.getVideoChatLoaded(state);

      expect(result).toBe(true);
    });

    it("getVideoChatError() should return the current 'error' state", () => {
      const result = VideoChatSelectors.getVideoChatError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
