import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriasCrearComponent } from './materias-crear.component';

describe('MateriasCrearComponent', () => {
  let component: MateriasCrearComponent;
  let fixture: ComponentFixture<MateriasCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
