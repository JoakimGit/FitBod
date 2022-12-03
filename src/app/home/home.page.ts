import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  constructor() {}
}
