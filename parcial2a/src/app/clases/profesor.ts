import { Usuario } from './usuario';

export class Profesor extends Usuario {
  constructor(email: string, password: string, nombre: string) {
    super(email, password, nombre, true, true);
  }
}
