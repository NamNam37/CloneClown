import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardErrorlogTableComponent } from './dashboard-errorlog-table.component';

describe('DashboardErrorlogTableComponent', () => {
  let component: DashboardErrorlogTableComponent;
  let fixture: ComponentFixture<DashboardErrorlogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardErrorlogTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardErrorlogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
