import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavigationChoice } from '@ngx-ui/bootstrap';

@Component({
  selector: 'holahola-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent {
  title = 'holahola';

  navigationChoices = [
    {
      text: 'Chat',
      link: ['chat']
    }
  ] as NavigationChoice[];
}
