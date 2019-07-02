import { Component, OnInit, Input } from '@angular/core';
import { IUsuarioId } from 'src/app/models/usuarioid.model';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  @Input('UsuariosFiltrados') Usuarios: IUsuarioId[];

  constructor() { }

  ngOnInit() {
  }

}
