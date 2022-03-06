import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerifyModalTableComponent } from './user-verify-modal-table.component';

describe('UserVerifyModalTableComponent', () => {
  let component: UserVerifyModalTableComponent;
  let fixture: ComponentFixture<UserVerifyModalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVerifyModalTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVerifyModalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
