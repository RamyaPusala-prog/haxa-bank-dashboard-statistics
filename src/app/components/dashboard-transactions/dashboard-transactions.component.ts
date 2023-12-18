import { Component, Input } from '@angular/core';
import { HeaderConstants } from 'src/app/Constants/header.constants';
import { TransactionsModel } from 'src/app/interfaces/dashboard.interface';

@Component({
  selector: 'app-dashboard-transactions',
  templateUrl: './dashboard-transactions.component.html',
  styleUrls: ['./dashboard-transactions.component.scss']
})
export class DashboardTransactionsComponent {
  @Input() transactions: Array<any> = [];
  
  public tableHeaders: any = HeaderConstants.DASHBOARD_TABLE;

}
