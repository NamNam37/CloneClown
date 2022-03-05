import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEditorDestComponent } from './config-editor-dest.component';

describe('ConfigEditorDestComponent', () => {
  let component: ConfigEditorDestComponent;
  let fixture: ComponentFixture<ConfigEditorDestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEditorDestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEditorDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
