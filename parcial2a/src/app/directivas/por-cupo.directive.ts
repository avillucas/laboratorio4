import { Directive, Input, OnChanges, ElementRef } from '@angular/core';
import { Materia } from '../clases/materia';

@Directive({
  selector: '[appPorCupo]',
})
export class PorCupoDirective implements OnChanges {

  @Input() materia: Materia;
  private element: ElementRef;
  private colorNormal: string;
  private colorMasDe10: string;
  private colorMasDe20: string;

  constructor(el: ElementRef) {
    this.colorNormal = 'auto';
    this.colorMasDe10 = 'green';
    this.colorMasDe20 = 'red';
    this.element = el;
  }

  private setColor() {
    let color: string = this.colorNormal;
    if (this.materia.Cupos > 20) {
      color = this.colorMasDe20;
    } else if (this.materia.Cupos > 10) {
      color = this.colorMasDe10;
    }
    this.element.nativeElement.style.color = color;
  }

  public get ColorMasDe10(): string {
    return this.colorMasDe10;
  }

  public set ColorMasDe10(value: string) {
    this.colorMasDe10 = value;
  }

  public get ColorNormal(): string {
    return this.colorNormal;
  }

  public set ColorNormal(value: string) {
    this.colorNormal = value;
  }

  public get ColorMasDe20(): string {
    return this.colorMasDe20;
  }

  public set ColorMasDe20(value: string) {
    this.colorMasDe20 = value;
  }

  ngOnChanges() {
    this.setColor();
  }

}
