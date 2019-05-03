import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeladosListaComponent } from './helados-lista.component';

describe('HeladosListaComponent', () => {
  let component: HeladosListaComponent;
  let fixture: ComponentFixture<HeladosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeladosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeladosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
