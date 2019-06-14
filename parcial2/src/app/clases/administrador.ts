import { Usuario } from './usuario';

export class Administrador extends Usuario {
  constructor(email: string, password: string) {
    super(email, password);
    this.admin = true;
  }
}
