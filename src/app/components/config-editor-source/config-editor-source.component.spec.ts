import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEditorSourceComponent } from './config-editor-source.component';

describe('ConfigEditorSourceComponent', () => {
  let component: ConfigEditorSourceComponent;
  let fixture: ComponentFixture<ConfigEditorSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEditorSourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigEditorSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
