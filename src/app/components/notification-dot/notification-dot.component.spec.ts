import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDotComponent } from './notification-dot.component';

describe('NotificationDotComponent', () => {
  let component: NotificationDotComponent;
  let fixture: ComponentFixture<NotificationDotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationDotComponent]
    });
    fixture = TestBed.createComponent(NotificationDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
