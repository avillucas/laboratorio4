import { IMateria } from '../models/materia.model';

export class Materia {

  private nombre: string;
  private cuatrimestre: number;
  private cupos: number;
  private profesor: string;

  constructor(nombre: string, cuatrimestre: number, cupos: number, profesor: string) {
    this.nombre = nombre;
    this.cuatrimestre = cuatrimestre;
    this.cupos = cupos;
    this.profesor = profesor;
  }

  public get Nombre(): string {
    return this.nombre;
  }
  public set Nombre(value: string) {
    this.nombre = value;
  }
  public get Cuatrimestre(): number {
    return this.cuatrimestre;
  }
  public set Cuatrimestre(value: number) {
    this.cuatrimestre = value;
  }

  public get Cupos(): number {
    return this.cupos;
  }
  public set Cupos(value: number) {
    this.cupos = value;
  }
  public get Profesor(): string {
    return this.profesor;
  }
  public set Profesor(value: string) {
    this.profesor = value;
  }

}
