import { Component, computed, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-kpi-card',
  imports: [MatCard, MatCardContent, MatIcon],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
})
export class KpiCard {
  title = input.required<string>();
  value = input.required<string>();
  unit = input<string>();
  trend = input.required<'up' | 'down' | 'stable'>();
  trendLabel = input.required<string>();
  icon = input.required<string>();

  protected trendIcon = computed(() => {
    const icons: Record<string, string> = {
      up: 'trending_up',
      down: 'trending_down',
      stable: 'trending_flat',
    };
    return icons[this.trend()];
  });
}
