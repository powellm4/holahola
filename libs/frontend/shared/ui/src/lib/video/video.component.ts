import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'holahola-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
