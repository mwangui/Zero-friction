import { Component } from '@angular/core';
import { KpiCard } from './kpi-card/kpi-card';
import { ChartWidget } from './chart-widget/chart-widget';
import { AlertList } from './alert-list/alert-list';
import { KPI_MOCKS } from '../core/mocks/kpi.mock';
import { ALERT_MOCKS } from '../core/mocks/alerts.mock';
import { TRAFFIC_MOCK, INCIDENT_REGION_MOCK } from '../core/mocks/charts.mock';
import { buildTrafficLatencyOption, buildIncidentRegionOption } from './chart-config.factory';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard, ChartWidget, AlertList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly kpis = KPI_MOCKS;
  protected readonly alerts = ALERT_MOCKS;
  protected readonly trafficChartOptions = buildTrafficLatencyOption(TRAFFIC_MOCK);
  protected readonly incidentChartOptions = buildIncidentRegionOption(INCIDENT_REGION_MOCK);
}
