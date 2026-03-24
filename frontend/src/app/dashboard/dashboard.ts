import { Component } from '@angular/core';
import { KpiCard } from './kpi-card/kpi-card';
import { ChartPlaceholder } from './chart-placeholder/chart-placeholder';
import { AlertList } from './alert-list/alert-list';
import { KPI_MOCKS } from '../core/mocks/kpi.mock';
import { ALERT_MOCKS } from '../core/mocks/alerts.mock';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard, ChartPlaceholder, AlertList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly kpis = KPI_MOCKS;
  protected readonly alerts = ALERT_MOCKS;
}
