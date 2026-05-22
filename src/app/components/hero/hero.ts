import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly startYear = 2024;
  readonly currentYear = new Date().getFullYear();
  readonly startYearStr = String(this.startYear);
  readonly currentYearStr = String(this.currentYear);
}
