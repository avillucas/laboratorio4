import { Usuario } from './usuario';

export class Cliente extends Usuario {
  constructor(email: string, password: string) {
    super(email, password);
    this.admin = false;
  }
}
