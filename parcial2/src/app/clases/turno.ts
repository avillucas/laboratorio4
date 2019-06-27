import { Cliente } from './cliente';
import { Usuario } from './usuario';
import { Veterinario } from './veterinario';
import { Time } from '@angular/common';
import { Persistible } from './persistible';
import { ITurno } from './turno.model';
import { environment } from 'src/environments/environment';


export class Turno  extends Persistible{
  private veterinario: Veterinario;
  private cliente: Cliente;
  private time: Time;

  constructor(cliente: Cliente, time: Time, veterinario: Veterinario) {
    super();
    this.cliente = cliente;
    this.time = time;
    this.veterinario = veterinario;
  }

  public get Cliente(): Usuario {
    return this.cliente;
  }

  public set Cliente(value: Usuario) {
    this.cliente = value;
  }

  public get Time(): Time {
    return this.time;
  }

  public set Time(value: Time) {
    this.time = value;
  }

  public get Veterinario(): Veterinario {
    return this.veterinario;
  }

  public set Veterinario(value: Veterinario) {
    this.veterinario = value;
  }

  get DAOData(): ITurno {
    return {
      paciente: this.cliente.DAOData,
      time: this.time.toString() ,
      veterinario: this.veterinario.DAOData,
    };
  }

  get DAOIdentificador(): string {
    return null;
  }

  get DAOReferencia(): string {
    return `${environment.db.turnos} /${this.DAOIdentificador}`;
  }
}
