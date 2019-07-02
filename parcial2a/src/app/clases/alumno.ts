import { Usuario } from './usuario';

export class Alumno extends Usuario {
  constructor(email: string, password: string, nombre: string) {
    super(email, password, nombre, false, false);
  }
}
