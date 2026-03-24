export interface AlertData {
  id: number;
  timestamp: string;
  severity: 'critical' | 'warning' | 'info';
  message: string;
  source: string;
}

export const ALERT_MOCKS: AlertData[] = [
  {
    id: 1,
    timestamp: '2026-03-24T10:32:00Z',
    severity: 'critical',
    message: 'Node B-12 unresponsive for 5 minutes',
    source: 'Network Monitor',
  },
  {
    id: 2,
    timestamp: '2026-03-24T10:28:00Z',
    severity: 'warning',
    message: 'CPU usage above 85% on Cluster A',
    source: 'Resource Monitor',
  },
  {
    id: 3,
    timestamp: '2026-03-24T10:15:00Z',
    severity: 'info',
    message: 'AI detected anomalous traffic pattern in Zone 3',
    source: 'AI Insights',
  },
  {
    id: 4,
    timestamp: '2026-03-24T09:58:00Z',
    severity: 'warning',
    message: 'SSL certificate expires in 7 days for api.example.com',
    source: 'Cert Monitor',
  },
  {
    id: 5,
    timestamp: '2026-03-24T09:45:00Z',
    severity: 'info',
    message: 'Auto-scaling triggered: +2 instances in Region US-East',
    source: 'AI Insights',
  },
];
