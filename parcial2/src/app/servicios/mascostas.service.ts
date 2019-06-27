import { Injectable } from '@angular/core';
import { Mascota } from '../clases/mascota';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IMascota } from 'src/app/clases/mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascostasService {

  constructor(private afs: AngularFirestore) {
  }

  traerTodos(): any {
    return this.afs.collection(`${environment.db.mascotas}`).snapshotChanges();
  }

  crear(mascota: Mascota) {
    return this.afs.collection(`${environment.db.mascotas}`).add(mascota.DAOData);
  }

  borrar(mascota: Mascota) {
    return this.afs.collection(`${environment.db.mascotas}`).doc(mascota.DAOIdentificador).delete();
  }

  actualizar(mascota: Mascota) {
    const userRef: AngularFirestoreDocument<IMascota> = this.afs.doc(`${environment.db.mascotas} /${mascota.DAOIdentificador}`);
    return userRef.set(mascota.DAOData, { merge: true });
  }
}
