import { Component, Input } from '@angular/core';
import { BalanceModel } from 'src/app/interfaces/dashboard.interface';

@Component({
  selector: 'app-dashboard-total-balance',
  templateUrl: './dashboard-total-balance.component.html',
  styleUrls: ['./dashboard-total-balance.component.scss']
})
export class DashboardTotalBalanceComponent {
  @Input() balance: any;
}
