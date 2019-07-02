import { Veterinario } from './veterinario';
import { IUsuario } from '../models/usuario.model';
import { environment } from 'src/environments/environment';
export abstract class Usuario {
  private uid: string;
  private email: string;
  private password: string;
  private nombre: string;
  protected admin: boolean;
  protected profesor: boolean;

  constructor(email: string, password: string, nombre: string, admin: boolean = false, profesor: boolean = false) {
    this.email = email;
    this.password = password;
    this.nombre = nombre;
    this.admin = admin;
    this.profesor = profesor;
  }

  public get IsAdmin(): boolean {
    return this.admin && !this.profesor;
  }

  public get IsProfesor(): boolean {
    return this.profesor;
  }

  public set Email(value: string) {
    this.email = value;
  }

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public set Password(value: string) {
    this.password = value;
  }

  public get Nombre(): string {
    return this.nombre;
  }

  public set Nombre(value: string) {
    this.nombre = value;
  }

  public get UID(): string {
    return this.uid;
  }

  public set UID(value: string) {
    this.uid = value;
  }

  public get Tipo(): string {
    return (this.profesor) ? 'Profesor' : (this.admin) ? 'Admin' : 'Alumno';
  }

  get DAOData(): IUsuario {
    return {
      uid: this.uid,
      email: this.email,
      nombre: this.nombre,
      admin: this.admin,
      profesor: this.profesor,
    };
  }

  get DAOIdentificador(): string {
    return this.uid;
  }

  get DAOReferencia(): string {
    return `${environment.db.usuarios} /${this.DAOIdentificador}`;
  }

  /*
    DAOFromMap(map: any): Usuario {
      //return new Usuario();
    }

    DAOtoMap(): any {

    }
    */
}
