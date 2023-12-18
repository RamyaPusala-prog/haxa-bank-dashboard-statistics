import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardMainComponent } from './pages/dashboard-main/dashboard-main.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { NotificationDotComponent } from './components/notification-dot/notification-dot.component';
import { TableComponent } from './components/table/table.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { SvgComponent } from './components/svg/svg.component';
import { DashboardTotalBalanceComponent } from './components/dashboard-total-balance/dashboard-total-balance.component';
import { DashboardMoneyStatsComponent } from './components/dashboard-money-stats/dashboard-money-stats.component';
import { DashboardTransactionsComponent } from './components/dashboard-transactions/dashboard-transactions.component';
import { DashboardStaticContentComponent } from './components/dashboard-static-content/dashboard-static-content.component';

import { NamePipe } from './pipes/name.pipe';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardMainComponent,

    SidebarComponent,
    HeaderComponent,
    SubHeaderComponent,
    NotificationDotComponent,
    TableComponent,
    CanvasComponent,
    SvgComponent,
    DashboardTotalBalanceComponent,
    DashboardMoneyStatsComponent,
    DashboardTransactionsComponent,
    DashboardStaticContentComponent,
    NamePipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [
    ApiService,
    NamePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
