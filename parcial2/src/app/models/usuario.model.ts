export interface IUsuario {
  uid: string;
  email: string;
  nombre: string;
  admin: boolean;
  veterinario: boolean;
  mascotas?:any;
  turnos?:any;
}
