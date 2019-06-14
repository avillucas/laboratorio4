import { Cliente } from './cliente';
import { Usuario } from './usuario';
import { Administrador } from './administrador';

export class Turno {
  private veterinario: Administrador;
  private cliente: Cliente;
  private fecha: Date;

  constructor(cliente: Cliente, fecha: Date, veterinario: Administrador) {
    this.cliente = cliente;
    this.fecha = fecha;
    this.veterinario = veterinario;
  }

  public get Cliente(): Usuario {
    return this.cliente;
  }

  public set Cliente(value: Usuario) {
    this.cliente = value;
  }

  public get Fecha(): Date {
    return this.fecha;
  }

  public set Fecha(value: Date) {
    this.fecha = value;
  }

  public get Veterinario(): Administrador {
    return this.veterinario;
  }

  public set Veterinario(value: Administrador) {
    this.veterinario = value;
  }
}
