import { Usuario } from './usuario';

export class Administrador extends Usuario {
  constructor(email: string, password: string, nombre: string) {
    super(email, password, nombre, true, false);
  }
}
