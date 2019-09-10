import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'holahola-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
