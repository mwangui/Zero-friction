import { Component, inject, OnInit, signal } from '@angular/core';
import { forkJoin } from 'rxjs';
import { KpiCard } from './kpi-card/kpi-card';
import { ChartWidget } from './chart-widget/chart-widget';
import { AlertList } from './alert-list/alert-list';
import { DashboardApi } from '../core/services/dashboard-api.service';
import { KpiDto, AlertDto, TrafficDto, IncidentDto } from '../core/models/api.models';
import { buildTrafficLatencyOption, buildIncidentRegionOption } from './chart-config.factory';
import type { EChartsOption } from 'echarts';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCard, ChartWidget, AlertList, MatProgressSpinner],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private readonly api = inject(DashboardApi);

  protected readonly loading = signal(true);
  protected readonly error = signal<string | null>(null);
  protected readonly kpis = signal<KpiDto[]>([]);
  protected readonly alerts = signal<AlertDto[]>([]);
  protected readonly trafficChartOptions = signal<EChartsOption>({});
  protected readonly incidentChartOptions = signal<EChartsOption>({});

  ngOnInit(): void {
    forkJoin({
      kpis: this.api.getKpis(),
      traffic: this.api.getTraffic(),
      incidents: this.api.getIncidents(),
      alerts: this.api.getAlerts(),
    }).subscribe({
      next: (data) => {
        this.kpis.set(data.kpis);
        this.alerts.set(data.alerts);
        this.trafficChartOptions.set(buildTrafficLatencyOption(data.traffic));
        this.incidentChartOptions.set(buildIncidentRegionOption(data.incidents));
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message ?? 'Failed to load dashboard data');
        this.loading.set(false);
      },
    });
  }
}
