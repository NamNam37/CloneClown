import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogReadModalComponent } from './log-read-modal.component';

describe('LogReadModalComponent', () => {
  let component: LogReadModalComponent;
  let fixture: ComponentFixture<LogReadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogReadModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogReadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
