import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-chart-placeholder',
  imports: [MatCard, MatCardContent, MatIcon],
  templateUrl: './chart-placeholder.html',
  styleUrl: './chart-placeholder.scss',
})
export class ChartPlaceholder {
  title = input.required<string>();
}
