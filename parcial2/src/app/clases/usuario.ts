import { Veterinario } from './veterinario';
import { Persistible } from './persistible';
import { IUsuario } from './usuario.model';
import { environment } from 'src/environments/environment';
export abstract class Usuario extends Persistible {
  private uid: string;
  private email: string;
  private password: string;
  private nombre: string;
  protected admin: boolean;
  protected veterinario: boolean;

  constructor(email: string, password: string, nombre: string, admin: boolean = false, veterinario: boolean = false) {
    super();
    this.email = email;
    this.password = password;
    this.nombre = nombre;
    this.admin = admin;
    this.veterinario = veterinario;
  }

  public get IsAdmin(): boolean {
    return this.admin && !this.veterinario;
  }

  public get IsVeterinario(): boolean {
    return this.veterinario;
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

  get DAOData(): IUsuario {
    return {
      uid: this.uid,
      email: this.email,
      nombre: this.nombre,
      admin: this.admin,
      veterinario: this.veterinario,
    };
  }

  get DAOIdentificador(): string {
    return this.uid;
  }

  get DAOReferencia(): string {
    return `${environment.db.usuarios} /${this.DAOIdentificador}`;
  }

}
