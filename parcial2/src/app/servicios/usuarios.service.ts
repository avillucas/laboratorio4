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

  traerTodos() {
    return this.afs.collection(`${environment.db.usuarios}`).snapshotChanges();
  }

  crear(usuario: Usuario) {
    return this.afs.collection(`${environment.db.usuarios}`).doc(usuario.DAOIdentificador).set(usuario.DAOData);
  }

  deleteUser(usuarios: Usuario) {
    return this.afs.collection(`${environment.db.usuarios}`).doc(usuarios.DAOIdentificador).delete();
  }

  actualizar(usuario: Usuario) {
    const userRef: AngularFirestoreDocument<IUsuario> = this.afs.doc(`${environment.db.usuarios} /${usuario.DAOIdentificador}`);
    return userRef.set(usuario.DAOData, { merge: true });
  }
}
