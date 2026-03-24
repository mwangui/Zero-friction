import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { LineChart, BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts';

echarts.use([
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);

@Component({
  selector: 'app-chart-widget',
  imports: [MatCard, MatCardContent, NgxEchartsDirective],
  providers: [provideEchartsCore({ echarts })],
  templateUrl: './chart-widget.html',
  styleUrl: './chart-widget.scss',
})
export class ChartWidget {
  title = input.required<string>();
  options = input.required<EChartsOption>();
}
