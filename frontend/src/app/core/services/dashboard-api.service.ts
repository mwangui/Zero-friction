import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KpiDto, TrafficDto, IncidentDto, AlertDto } from '../models/api.models';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DashboardApi {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiBaseUrl;

  getKpis(): Observable<KpiDto[]> {
    return this.http.get<KpiDto[]>(`${this.base}/kpis`);
  }

  getTraffic(): Observable<TrafficDto[]> {
    return this.http.get<TrafficDto[]>(`${this.base}/traffic`);
  }

  getIncidents(): Observable<IncidentDto[]> {
    return this.http.get<IncidentDto[]>(`${this.base}/incidents`);
  }

  getAlerts(): Observable<AlertDto[]> {
    return this.http.get<AlertDto[]>(`${this.base}/alerts`);
  }
}
