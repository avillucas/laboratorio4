export class Mensaje {

  private texto: string;
  // private fecha: Time;
  // private usuario: Usuario;

  constructor(texto: string) {
    this.texto = texto;
  }

  get Texto(): string {
    return this.texto;
  }

  set Texto(texto: string) {
    this.texto = texto;
  }
}
