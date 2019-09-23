import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlteradoComponent } from './form-alterado.component';

describe('FormAlteradoComponent', () => {
  let component: FormAlteradoComponent;
  let fixture: ComponentFixture<FormAlteradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAlteradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlteradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
