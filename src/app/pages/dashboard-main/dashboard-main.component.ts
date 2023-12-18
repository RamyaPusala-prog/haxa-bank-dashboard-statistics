import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/Constants/constants';
import { HeaderConstants } from 'src/app/Constants/header.constants';
import { BalanceModel, MoneyStatisticsKeys, TransactionsModel } from 'src/app/interfaces/dashboard.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit {
  public balanceData: BalanceModel | undefined;
  public moneyStatsData: any;
  public transactionsData: Array<TransactionsModel> = [];
  public canvasData: any;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getChartData();
  }

  //get api response
  getData(): void {
    this.apiService.getApiData().subscribe((data: any) => {
      if (data.type == Constants.sucessType) {
        this.balanceData = data.body[Constants.balance_key];
        this.moneyStatsData = data.body[Constants.money_statistics_key];
        this.transactionsData = data.body[Constants.transactions_key];
      } else {
        //error
        console.log(data.body.error.body.message);
      }
    });
  }

  //static bar graph data
  getChartData() {
    this.canvasData = {
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Income",
            font: {
              weight: "bold"
            },
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19],
            backgroundColor: Constants.dashboard_bar_colors[0],
            borderColor: Constants.dashboard_bar_colors[0],
            borderRadius: 20,

          },
          {
            label: "Investment",
            data: [35, 7, 12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
            backgroundColor: Constants.dashboard_bar_colors[1],
            borderColor: Constants.dashboard_bar_colors[1],
            borderRadius: 20
          },
          {
            label: "Expense",
            data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3, 12, 19],
            backgroundColor: Constants.dashboard_bar_colors[2],
            borderColor: Constants.dashboard_bar_colors[2],
            borderRadius: 20
          }]
      },
      options: {
        plugins: {
          legend: {
            enabled: true,
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              font: {
                size: 10,
                weight: 600
              }
            }
          },
          tooltip: {
            enabled: true
          }
        },
        scales: {
          y: {
            suggestedMin: 0,
            suggestedMax: 50,
            beginAtZero: true,
          },
        }
      },

    }
  }
}
