import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormClassicoComponent } from './form-classico.component';

describe('FormClassicoComponent', () => {
  let component: FormClassicoComponent;
  let fixture: ComponentFixture<FormClassicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormClassicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormClassicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
