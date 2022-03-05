import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEditorTableComponent } from './users-editor-table.component';

describe('UsersEditorTableComponent', () => {
  let component: UsersEditorTableComponent;
  let fixture: ComponentFixture<UsersEditorTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEditorTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEditorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
