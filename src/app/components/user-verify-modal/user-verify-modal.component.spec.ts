import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVerifyModalComponent } from './user-verify-modal.component';

describe('UserVerifyModalComponent', () => {
  let component: UserVerifyModalComponent;
  let fixture: ComponentFixture<UserVerifyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVerifyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserVerifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
