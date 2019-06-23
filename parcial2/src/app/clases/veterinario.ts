import { Usuario } from './usuario';

export class Veterinario extends Usuario {
  constructor(email: string, password: string) {
    super(email, password);
    this.admin = true;
  }
}
