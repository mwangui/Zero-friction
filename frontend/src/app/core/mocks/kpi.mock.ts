export interface KpiData {
  title: string;
  value: string;
  unit?: string;
  trend: 'up' | 'down' | 'stable';
  trendLabel: string;
  icon: string;
}

export const KPI_MOCKS: KpiData[] = [
  {
    title: 'Network Health',
    value: '98.2',
    unit: '%',
    trend: 'up',
    trendLabel: '+1.5% from last hour',
    icon: 'hub',
  },
  {
    title: 'Critical Incidents',
    value: '3',
    trend: 'down',
    trendLabel: '-2 from yesterday',
    icon: 'error_outline',
  },
  {
    title: 'Threat Severity',
    value: 'Low',
    trend: 'stable',
    trendLabel: 'No change',
    icon: 'shield',
  },
  {
    title: 'Site Availability',
    value: '99.97',
    unit: '%',
    trend: 'up',
    trendLabel: '+0.03% this week',
    icon: 'cloud_done',
  },
];
