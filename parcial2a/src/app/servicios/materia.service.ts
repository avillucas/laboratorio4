import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Materia } from '../clases/materia';
import { IMateria } from '../models/materia.model';
import { IMateriaId } from '../models/materiaid.model';
import { map } from 'rxjs/operators';
import { IPersistible } from './ipersistible.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService implements IPersistible {

  private collection: AngularFirestoreCollection<IMateria>;

  constructor(private afs: AngularFirestore) {
    this.collection = this.afs.collection(environment.db.materias);
  }

  get Collection(): AngularFirestoreCollection<IMateria> {
    return this.collection;
  }

  get Observable() {
    //    return this.collection.valueChanges();
    return this.collection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const imateria = a.payload.doc.data() as IMateria;
          const materia = this.DataDAO(imateria);
          const id = a.payload.doc.id;
          console.info(materia);
          return { id, materia } as IMateriaId;
        });
      }));
  }

  crear(materia: Materia) {
    const imateria = this.DAOData(materia);
    return this.collection.add(imateria);
  }

  borrar(id: string, materia: Materia) {
    return this.collection.doc(id).delete();
  }

  actualizar(id: string, materia: Materia) {
    const userRef: AngularFirestoreDocument<IMateria> = this.afs.doc(`${environment.db.materias}/${id}`);
    const imateria = this.DAOData(materia);
    return userRef.set(imateria, { merge: true });
  }

  DAOData(materia: Materia): IMateria {
    return {
      nombre: materia.Nombre,
      cuatrimestre: materia.Cuatrimestre,
      cupos: materia.Cupos,
      profesor: materia.Profesor
    };
  }

  DataDAO(imateria: IMateria): Materia {
    return new Materia(
      imateria.nombre,
      imateria.cuatrimestre,
      imateria.cupos,
      imateria.profesor
    );
  }


  /*
  return data and id
  this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });*/
}
