import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, map, take, tap } from 'rxjs/operators';
import { Usuario } from '../clases/usuario';
import { UsuariosService } from './usuarios.service';
import { IAuth } from '../clases/auth.model';
import { Cliente } from '../clases/cliente';
import { IUsuario } from '../clases/usuario.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user$: Observable<IUsuario>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private uService: UsuariosService
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          return this.afs.doc<IUsuario>(`${environment.db.usuarios}/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  /**
   * Loguea un usuario por email y password
   * @param email email con el que se busca hacer el ingreso
   * @param password password con el que hacer el ingreso
   */
  async emailPasswordLogIn(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Registro de un usuario y posterior logueo
   * @param nombre  nombre del cliente
   * @param email email del cliente
   * @param password  password del cliente
   */
  async clienteSingIn(nombre, email, password) {
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    const usuario = new Cliente(email, password, nombre);
    usuario.UID = credential.user.uid;
    return this.uService.crear(usuario);
  }

  get CurrentUID(): string {
    return this.afAuth.auth.currentUser.uid;
  }

  /**
   * Cerrar sesion del cliente autenticado
   */
  async CerrarSesion() {
    await this.afAuth.auth.signOut();
    return true;
  }
}
