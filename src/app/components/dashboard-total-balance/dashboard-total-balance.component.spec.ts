import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTotalBalanceComponent } from './dashboard-total-balance.component';

describe('DashboardTotalBalanceComponent', () => {
  let component: DashboardTotalBalanceComponent;
  let fixture: ComponentFixture<DashboardTotalBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTotalBalanceComponent]
    });
    fixture = TestBed.createComponent(DashboardTotalBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
