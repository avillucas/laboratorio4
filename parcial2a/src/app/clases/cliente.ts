import { Usuario } from './usuario';

export class Cliente extends Usuario {
  constructor(email: string, password: string, nombre: string) {
    super(email, password, nombre, false, false);
  }

}
