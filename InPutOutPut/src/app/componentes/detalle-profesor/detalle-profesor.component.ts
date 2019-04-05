import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profesor } from '../../clases/profesor';

@Component({
  selector: 'app-detalle-profesor',
  templateUrl: './detalle-profesor.component.html',
  styleUrls: ['./detalle-profesor.component.css']
})
export class DetalleProfesorComponent implements OnInit {
  @Input() unProfesor: Profesor;

  constructor() {}
  @Output() profesorAEliminar: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {}

  Eliminar() {
    this.profesorAEliminar.emit(this.unProfesor);
  }
}
