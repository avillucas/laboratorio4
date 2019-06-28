import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Materia } from '../clases/materia';
import { IMateria } from '../models/materia.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private afs: AngularFirestore) {
  }

  traerTodos(): any {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection(`${environment.db.materias}`).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });

    //return this.afs.collection(`${environment.db.materias}`).snapshotChanges();
  }

  crear(materia: Materia) {
    return this.afs.collection(`${environment.db.materias}`).add(materia.DAOData);
  }

  borrar(materia: Materia) {
    return this.afs.collection(`${environment.db.materias}`).doc(materia.DAOIdentificador).delete();
  }

  actualizar(materia: Materia) {
    const userRef: AngularFirestoreDocument<IMateria> = this.afs.doc(`${environment.db.materias} /${materia.DAOIdentificador}`);
    return userRef.set(materia.DAOData, { merge: true });
  }
}
