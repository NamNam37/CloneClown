import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsDeleteAllModalComponent } from './logs-delete-all-modal.component';

describe('LogsDeleteAllModalComponent', () => {
  let component: LogsDeleteAllModalComponent;
  let fixture: ComponentFixture<LogsDeleteAllModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsDeleteAllModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsDeleteAllModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
