import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Materia } from 'src/app/clases/materia';

@Component({
  selector: 'app-materias-lista',
  templateUrl: './materias-lista.component.html',
  styleUrls: ['./materias-lista.component.css']
})
export class MateriasListaComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('materias') Materias: Materia[];

  @Output() materiaSeleccionada = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  seleccionarMateria(materiaSelecciona: string) {
    this.materiaSeleccionada.emit(materiaSelecciona);
  }
}
