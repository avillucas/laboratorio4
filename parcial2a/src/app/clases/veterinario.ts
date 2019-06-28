import { Usuario } from './usuario';

export class Veterinario extends Usuario {
  constructor(email: string, password: string, nombre: string) {
    super(email, password, nombre, true, true);
  }
}
