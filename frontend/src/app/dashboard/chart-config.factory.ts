import type { EChartsOption } from 'echarts';
import { TrafficDto, IncidentDto } from '../core/models/api.models';

/**
 * Chart color palette aligned with Material 3 violet theme.
 * Uses CSS variable fallbacks for runtime theme integration.
 */
const PALETTE = {
  primary: '#7b1fa2',
  secondary: '#9c27b0',
  tertiary: '#42a5f5',
  surface: '#f5f0ff',
  onSurface: '#1c1b1f',
  outline: '#79747e',
  critical: '#d32f2f',
  warning: '#ed6c02',
  info: '#0288d1',
} as const;

const BASE_TEXT_STYLE = {
  fontFamily: 'Roboto, sans-serif',
  color: PALETTE.onSurface,
} as const;

function baseGrid(): EChartsOption['grid'] {
  return { left: 48, right: 24, top: 40, bottom: 32, containLabel: true };
}

export function buildTrafficLatencyOption(data: TrafficDto[]): EChartsOption {
  const times = data.map((d) => d.time);

  return {
    textStyle: BASE_TEXT_STYLE,
    tooltip: { trigger: 'axis' },
    legend: { top: 0, textStyle: { fontSize: 12 } },
    grid: baseGrid(),
    xAxis: {
      type: 'category',
      data: times,
      axisLine: { lineStyle: { color: PALETTE.outline } },
      axisLabel: { fontSize: 11 },
    },
    yAxis: [
      {
        type: 'value',
        name: 'Mbps',
        nameTextStyle: { fontSize: 11 },
        axisLine: { show: false },
        splitLine: { lineStyle: { color: PALETTE.surface } },
      },
      {
        type: 'value',
        name: 'ms',
        nameTextStyle: { fontSize: 11 },
        axisLine: { show: false },
        splitLine: { show: false },
      },
    ],
    series: [
      {
        name: 'Inbound',
        type: 'line',
        data: data.map((d) => d.inbound),
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2 },
        itemStyle: { color: PALETTE.primary },
        areaStyle: { color: `${PALETTE.primary}18` },
      },
      {
        name: 'Outbound',
        type: 'line',
        data: data.map((d) => d.outbound),
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2 },
        itemStyle: { color: PALETTE.secondary },
        areaStyle: { color: `${PALETTE.secondary}18` },
      },
      {
        name: 'Latency',
        type: 'line',
        yAxisIndex: 1,
        data: data.map((d) => d.latency),
        smooth: true,
        symbol: 'none',
        lineStyle: { width: 2, type: 'dashed' },
        itemStyle: { color: PALETTE.tertiary },
      },
    ],
  };
}

export function buildIncidentRegionOption(data: IncidentDto[]): EChartsOption {
  const regions = data.map((d) => d.region);

  return {
    textStyle: BASE_TEXT_STYLE,
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    legend: { top: 0, textStyle: { fontSize: 12 } },
    grid: baseGrid(),
    xAxis: {
      type: 'category',
      data: regions,
      axisLine: { lineStyle: { color: PALETTE.outline } },
      axisLabel: { fontSize: 11 },
    },
    yAxis: {
      type: 'value',
      name: 'Incidents',
      nameTextStyle: { fontSize: 11 },
      axisLine: { show: false },
      splitLine: { lineStyle: { color: PALETTE.surface } },
    },
    series: [
      {
        name: 'Critical',
        type: 'bar',
        stack: 'severity',
        data: data.map((d) => d.critical),
        itemStyle: { color: PALETTE.critical, borderRadius: [0, 0, 0, 0] },
      },
      {
        name: 'Warning',
        type: 'bar',
        stack: 'severity',
        data: data.map((d) => d.warning),
        itemStyle: { color: PALETTE.warning },
      },
      {
        name: 'Info',
        type: 'bar',
        stack: 'severity',
        data: data.map((d) => d.info),
        itemStyle: { color: PALETTE.info, borderRadius: [4, 4, 0, 0] },
        barWidth: '50%',
      },
    ],
  };
}
