import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationChoice } from '@ngx-ui/bootstrap';

@Component({
  selector: 'holahola-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  readonly navigationChoices = [
    {
      text: 'Friends',
      link: ['chat', 'friends']
    },
    {
      text: 'Recent',
      link: ['chat', 'recent']
    }
  ] as NavigationChoice[];
}
