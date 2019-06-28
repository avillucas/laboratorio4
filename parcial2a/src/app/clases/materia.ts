import { IMateria } from '../models/materia.model';

export class Materia {

  public id: string;
  public Nombre: string;
  public Cuatrimestre: number;
  public Cupos: number;
  public Profesor: string;

  constructor(nombre: string, cuatrimestre: number, cupos: number, profesor: string, id: string = null) {
    this.id = id;
    this.Nombre = nombre;
    this.Cuatrimestre = cuatrimestre;
    this.Cupos = cupos;
    this.Profesor = profesor;
  }

  public get DAOData(): IMateria {
    return {
      id: this.id,
      nombre: this.Nombre,
      cuatrimestre: this.Cuatrimestre,
      cupos: this.Cupos,
      profesor: this.Profesor
    };
  }

  public get DAOIdentificador(): string {
    return this.id;
  }

}
