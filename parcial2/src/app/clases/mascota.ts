import { Usuario } from './usuario';
import { Cliente } from './cliente';
import { TipoAnimal } from './../enums/tipo-animal.enum';
import { IMascota } from './mascota.model';
import { Persistible } from './persistible';
import { environment } from 'src/environments/environment';

export class Mascota extends Persistible {
  private tipo: TipoAnimal;
  private raza: string;
  private nombre: string;
  private edad: number;
  private responsable: Cliente;
  private foto: string;

  constructor(tipo: TipoAnimal, raza: string, nombre: string, edad: number, responsable: Usuario) {
    super();
    this.tipo = tipo;
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
    this.responsable = responsable;
  }

  public get Tipo(): TipoAnimal {
    return this.tipo;
  }

  public set Tipo(value: TipoAnimal) {
    this.tipo = value;
  }

  public get Raza(): string {
    return this.raza;
  }

  public set Raza(value: string) {
    this.raza = value;
  }

  public get Nombre(): string {
    return this.nombre;
  }

  public set Nombre(value: string) {
    this.nombre = value;
  }

  public get Edad(): number {
    return this.edad;
  }

  public set Edad(value: number) {
    this.edad = value;
  }

  public get Responsable(): Cliente {
    return this.responsable;
  }

  public set Responsable(value: Cliente) {
    this.responsable = value;
  }

  public get Foto(): string {
    return this.foto;
  }

  public set Foto(value: string) {
    this.foto = value;
  }

  get DAOData(): IMascota {
    return {
      tipo: this.tipo,
      raza: this.raza,
      nombre: this.nombre,
      edad: this.edad,
      responsable: this.responsable.DAOData,
      //foto: '-'
    };
  }

  get DAOIdentificador(): string {
    return null;
  }

  get DAOReferencia(): string {
    return `${environment.db.mascotas} /${this.DAOIdentificador}`;
  }



}
