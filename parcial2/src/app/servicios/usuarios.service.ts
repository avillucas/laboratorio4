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

  /*
  public traerPorUID(UID: string): Usuario {
    //return this.afs.object('user/'+UID).valueChanges();
    const usuario =  this.afs.doc<IUsuario>(`${environment.db.usuarios}/${UID}`).valueChanges();
    usuario.pipe(
      map(
        res => {
            console.info(res);
        }
      )
    );

    return new Cliente('asdasd', 'asdasdasdas', 'asdasdasdas');


    this.afs.doc<IUsuario>(`${environment.db.usuarios}/${UID}`).snapshotChanges()
      .subscribe(snapshots => {
        snapshots.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Usuario;
        });

        return new Cliente('asdasd', 'asdasdasdas', 'asdasdasdas');
        // return snapshots.toTipoEspecifico();
      });
    return null;

  }
  */

  protected create(usuario: Usuario) {
    const data = {
      uid: usuario.UID,
      email: usuario.Email,
      nombre: usuario.Nombre,
      admin: usuario.IsAdmin,
      veterinario: usuario.IsVeterinario,
    };
    return this.afs.collection(`${environment.db.usuarios}`).add(data);
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
