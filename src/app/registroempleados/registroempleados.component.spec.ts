import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroempleadosComponent } from './registroempleados.component';

describe('RegistroempleadosComponent', () => {
  let component: RegistroempleadosComponent;
  let fixture: ComponentFixture<RegistroempleadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroempleadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
