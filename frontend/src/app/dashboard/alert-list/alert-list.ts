import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { AlertDto } from '../../core/models/api.models';

@Component({
  selector: 'app-alert-list',
  imports: [DatePipe, MatCard, MatCardContent, MatIcon],
  templateUrl: './alert-list.html',
  styleUrl: './alert-list.scss',
})
export class AlertList {
  alerts = input.required<AlertDto[]>();

  protected severityIcon(severity: AlertDto['severity']): string {
    const icons: Record<string, string> = {
      critical: 'error',
      warning: 'warning',
      info: 'info',
    };
    return icons[severity];
  }
}
