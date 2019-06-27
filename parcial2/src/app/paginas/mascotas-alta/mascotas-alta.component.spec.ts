import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasAltaComponent } from './mascotas-alta.component';

describe('MascotasAltaComponent', () => {
  let component: MascotasAltaComponent;
  let fixture: ComponentFixture<MascotasAltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasAltaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotasAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
