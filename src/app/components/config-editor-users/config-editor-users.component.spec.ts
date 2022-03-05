import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEditorUsersComponent } from './config-editor-users.component';

describe('ConfigEditorUsersComponent', () => {
  let component: ConfigEditorUsersComponent;
  let fixture: ComponentFixture<ConfigEditorUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEditorUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEditorUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
