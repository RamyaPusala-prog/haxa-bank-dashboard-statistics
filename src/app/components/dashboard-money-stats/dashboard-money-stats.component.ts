import { Component, Input } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { MoneyStatisticsKeys } from 'src/app/interfaces/dashboard.interface';

@Component({
  selector: 'app-dashboard-money-stats',
  templateUrl: './dashboard-money-stats.component.html',
  styleUrls: ['./dashboard-money-stats.component.scss']
})
export class DashboardMoneyStatsComponent {
  @Input() moneyStatistics: any;
  @Input() canvas: any;

  public barColors = Constants.dashboard_bar_colors;
  public moneyStatkeys = MoneyStatisticsKeys;
}
