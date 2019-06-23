import { Usuario } from './usuario';
import { Cliente } from './cliente';
import { TipoAnimal } from './../enums/tipo-animal.enum';

export class Mascota {
  private tipo: TipoAnimal;
  private raza: string;
  private nombre: string;
  private edad: number;
  private responsable: Cliente;
  private foto: string;

  constructor(   tipo: TipoAnimal,    raza: string,    nombre: string,    edad: number,    duenio: Usuario  ) {
    this.tipo = tipo;
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
    this.responsable = duenio;
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

}
