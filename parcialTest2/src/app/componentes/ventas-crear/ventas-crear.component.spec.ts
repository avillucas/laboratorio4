import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasCrearComponent } from './ventas-crear.component';

describe('VentasCrearComponent', () => {
  let component: VentasCrearComponent;
  let fixture: ComponentFixture<VentasCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
