import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMoneyStatsComponent } from './dashboard-money-stats.component';

describe('DashboardMoneyStatsComponent', () => {
  let component: DashboardMoneyStatsComponent;
  let fixture: ComponentFixture<DashboardMoneyStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMoneyStatsComponent]
    });
    fixture = TestBed.createComponent(DashboardMoneyStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
