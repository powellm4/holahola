import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { VideoChatEffects } from './video-chat.effects';
import * as VideoChatActions from './video-chat.actions';

describe('VideoChatEffects', () => {
  let actions: Observable<any>;
  let effects: VideoChatEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        VideoChatEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(VideoChatEffects);
  });

  describe('loadVideoChat$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: VideoChatActions.loadVideoChat() });

      const expected = hot('-a-|', {
        a: VideoChatActions.loadVideoChatSuccess({ videoChat: [] })
      });

      expect(effects.loadVideoChat$).toBeObservable(expected);
    });
  });
});
