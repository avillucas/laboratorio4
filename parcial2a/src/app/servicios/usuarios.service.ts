import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario';
import { IUsuario } from '../models/usuario.model';
import { Cliente } from '../clases/cliente';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUsuarioId } from '../models/usuarioid.model';
import { Profesor } from '../clases/profesor';
import { Alumno } from '../clases/alumno';
import { Administrador } from '../clases/administrador';
import { TipoUsuario } from '../enums/tipo-usuario.enum';

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {

  private collection: AngularFirestoreCollection<IUsuario>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection(environment.db.usuarios);
  }

  get Collection(): AngularFirestoreCollection<IUsuario> {
    return this.collection;
  }

  traerPorTipo(tipo: TipoUsuario): Observable<IUsuarioId[]> {
    let collection: AngularFirestoreCollection<IUsuario>;
    // tslint:disable-next-line:triple-equals
    if (tipo == TipoUsuario.profesor) {
      collection = this.afs.collection(environment.db.usuarios, ref => ref.where('profesor', '==', true));
      // tslint:disable-next-line:triple-equals
    } else if (tipo == TipoUsuario.admin) {
      collection = this.afs.collection(environment.db.usuarios, ref => ref.where('admin', '==', true));
    } else {
      collection = this.afs.collection(environment.db.usuarios, ref => ref.where('admin', '==', false));
    }
    return this.makeObservable(collection);
  }

  private makeObservable(collection: AngularFirestoreCollection<IUsuario>) {
    return collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const iusuario = a.payload.doc.data() as IUsuario;
          const usuario = this.DataDAO(iusuario);
          const id = a.payload.doc.id;
          return { id, usuario } as IUsuarioId;
        });
      }));
  }

  get Observable() {
    return this.makeObservable(this.collection);
  }

  crear(usuario: Usuario) {
    const imateria = this.DAOData(usuario);
    return this.collection.add(imateria);
  }

  borrar(id: string) {
    return this.collection.doc(id).delete();
  }

  actualizar(id: string, usuario: Usuario) {
    const userRef: AngularFirestoreDocument<IUsuario> = this.afs.doc(`${environment.db.usuarios}/${id}`);
    const imateria = this.DAOData(usuario);
    return userRef.set(imateria, { merge: true });
  }

  DAOData(usuario: Usuario): IUsuario {
    return {
      nombre: usuario.Nombre,
      profesor: usuario.IsProfesor,
      admin: usuario.IsAdmin,
      email: usuario.Email
    };
  }

  DataDAO(iusuario: IUsuario): Usuario {
    let usuario: Usuario;
    if (iusuario.profesor) {
      usuario = new Profesor(iusuario.email, '**', iusuario.nombre);
    } else if (iusuario.admin) {
      usuario = new Administrador(iusuario.email, '**', iusuario.nombre);
    } else {
      usuario = new Alumno(iusuario.email, '**', iusuario.nombre);
    }
    return usuario;
  }

  async traerPorUID(UID: string) {
    const userRef: AngularFirestoreDocument<IUsuario> = this.afs.doc(`${environment.db.usuarios} /${UID}`);
    return await userRef.get().subscribe(doc => {
      if (doc.exists) {
        return this.DataDAO(doc.data() as IUsuario);
      }
      return null;
    });
  }

}
