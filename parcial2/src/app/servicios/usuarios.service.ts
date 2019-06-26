import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { IUsuario } from '../clases/usuario.model';
import { Cliente } from '../clases/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  constructor(private afs: AngularFirestore) {
  }

  public traerTodos() {
    return this.afs.collection(`${environment.db.usuarios}`).snapshotChanges();
  }

  public crear(usuario: Usuario) {
    const data = {
      uid: usuario.UID,
      email: usuario.Email,
      nombre: usuario.Nombre,
      admin: usuario.IsAdmin,
      veterinario: usuario.IsVeterinario,
    };
    return this.afs.collection(`${environment.db.usuarios}`).doc(usuario.UID).set(data);
  }

  protected deleteUser(UID: string) {
    return this.afs.collection(`${environment.db.usuarios}`).doc(UID).delete();
  }

  protected actualizar(usuario: Usuario) {
    const userRef: AngularFirestoreDocument<IUsuario> = this.afs.doc(`${environment.db.usuarios} /${usuario.UID}`);
    const data = {
      uid: usuario.UID,
      email: usuario.Email,
      nombre: usuario.Nombre,
      admin: usuario.IsAdmin,
      veterinario: usuario.IsVeterinario,
    };
    return userRef.set(data, { merge: true });
  }
}
