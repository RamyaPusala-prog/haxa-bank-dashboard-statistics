import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStaticContentComponent } from './dashboard-static-content.component';

describe('DashboardStaticContentComponent', () => {
  let component: DashboardStaticContentComponent;
  let fixture: ComponentFixture<DashboardStaticContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardStaticContentComponent]
    });
    fixture = TestBed.createComponent(DashboardStaticContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
