export interface KpiDto {
  id: string;
  title: string;
  value: string;
  unit?: string;
  trend: 'up' | 'down' | 'stable';
  trendLabel: string;
  icon: string;
}

export interface TrafficDto {
  time: string;
  inbound: number;
  outbound: number;
  latency: number;
}

export interface IncidentDto {
  region: string;
  critical: number;
  warning: number;
  info: number;
}

export interface AlertDto {
  id: number;
  timestamp: string;
  severity: 'critical' | 'warning' | 'info';
  message: string;
  source: string;
}

export interface CpuLoadDto {
  device: string;
  load: number;
}
