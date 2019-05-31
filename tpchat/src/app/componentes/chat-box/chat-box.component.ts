import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from 'src/app/clases/mensaje';


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  public mensajesTxt: string;
  private mensajesCollection: AngularFirestoreCollection<Mensaje>;
  mensajes: Observable<Mensaje[]>;

  constructor(private afs: AngularFirestore) {
    this.mensajesCollection = afs.collection<Mensaje>('mensajes');
    this.mensajes = this.mensajesCollection.valueChanges();
  }

  ngOnInit() {

  }

  public enviarMensaje() {
    this.mensajesCollection.add(new Mensaje(this.mensajesTxt));
  }

}
