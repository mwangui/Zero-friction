export interface TrafficDataPoint {
  time: string;
  inbound: number;
  outbound: number;
  latency: number;
}

export const TRAFFIC_MOCK: TrafficDataPoint[] = [
  { time: '00:00', inbound: 120, outbound: 95, latency: 12 },
  { time: '01:00', inbound: 85, outbound: 70, latency: 10 },
  { time: '02:00', inbound: 60, outbound: 52, latency: 8 },
  { time: '03:00', inbound: 45, outbound: 38, latency: 7 },
  { time: '04:00', inbound: 40, outbound: 35, latency: 6 },
  { time: '05:00', inbound: 55, outbound: 42, latency: 8 },
  { time: '06:00', inbound: 90, outbound: 78, latency: 11 },
  { time: '07:00', inbound: 145, outbound: 120, latency: 15 },
  { time: '08:00', inbound: 210, outbound: 180, latency: 22 },
  { time: '09:00', inbound: 280, outbound: 245, latency: 28 },
  { time: '10:00', inbound: 310, outbound: 270, latency: 32 },
  { time: '11:00', inbound: 295, outbound: 260, latency: 30 },
  { time: '12:00', inbound: 270, outbound: 235, latency: 27 },
  { time: '13:00', inbound: 285, outbound: 250, latency: 29 },
  { time: '14:00', inbound: 320, outbound: 280, latency: 35 },
  { time: '15:00', inbound: 300, outbound: 265, latency: 31 },
  { time: '16:00', inbound: 275, outbound: 240, latency: 26 },
  { time: '17:00', inbound: 250, outbound: 215, latency: 24 },
  { time: '18:00', inbound: 220, outbound: 190, latency: 20 },
  { time: '19:00', inbound: 185, outbound: 160, latency: 18 },
  { time: '20:00', inbound: 160, outbound: 138, latency: 16 },
  { time: '21:00', inbound: 140, outbound: 118, latency: 14 },
  { time: '22:00', inbound: 125, outbound: 105, latency: 13 },
  { time: '23:00', inbound: 110, outbound: 90, latency: 11 },
];

export interface IncidentRegionData {
  region: string;
  critical: number;
  warning: number;
  info: number;
}

export const INCIDENT_REGION_MOCK: IncidentRegionData[] = [
  { region: 'US-East', critical: 5, warning: 12, info: 8 },
  { region: 'US-West', critical: 2, warning: 8, info: 15 },
  { region: 'EU-West', critical: 7, warning: 10, info: 6 },
  { region: 'AP-South', critical: 3, warning: 14, info: 11 },
  { region: 'AP-East', critical: 1, warning: 6, info: 9 },
];
