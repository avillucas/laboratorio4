import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladoCrearComponent } from './helado-crear.component';

describe('HeladoCrearComponent', () => {
  let component: HeladoCrearComponent;
  let fixture: ComponentFixture<HeladoCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladoCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
