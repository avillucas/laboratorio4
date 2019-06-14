import { Usuario } from "./usuario";
import { TipoAnimal } from "./../enums/tipo-animal.enum";

export class Mascota {
  private tipo: TipoAnimal;
  private raza: string;
  private nombre: string;
  private edad: number;
  private duenio: Usuario;
  private foto: string;

  constructor(   tipo: TipoAnimal,    raza: string,    nombre: string,    edad: number,    duenio: Usuario  ) {
    this.tipo = tipo;
    this.raza = raza;
    this.nombre = nombre;
    this.edad = edad;
    this.duenio = duenio;
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

  public get Duenio(): Usuario {
    return this.duenio;
  }

  public set Duenio(value: Usuario) {
    this.duenio = value;
  }

  public get Foto(): string {
    return this.foto;
  }

  public set Foto(value: string) {
    this.foto = value;
  }
  
}
