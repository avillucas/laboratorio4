import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { IUsuario } from '../models/usuario.model';
import { Cliente } from '../clases/cliente';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarios: Usuario[];

  constructor(private afs: AngularFirestore) {

  }


  async traerPorUID(UID: string) {
    const userRef: AngularFirestoreDocument<IUsuario> = this.afs.doc(`${environment.db.usuarios} /${UID}`);

    return await userRef.get().subscribe(doc => {
      if (doc.exists) {
        return doc.data() ;
      }
      return null;
    });
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
