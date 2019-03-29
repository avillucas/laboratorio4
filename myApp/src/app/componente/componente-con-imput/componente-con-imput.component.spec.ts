import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConImputComponent } from './componente-con-imput.component';

describe('ComponenteConImputComponent', () => {
  let component: ComponenteConImputComponent;
  let fixture: ComponentFixture<ComponenteConImputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteConImputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteConImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
