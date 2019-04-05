import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Profesor } from 'src/app/clases/profesor';

@Component({
  selector: '[app-fila-profesor]',
  templateUrl: './fila-profesor.component.html',
  styleUrls: ['./fila-profesor.component.css']
})
export class FilaProfesorComponent implements OnInit {
  @Input() profesorData: Profesor;
  @Output() profesorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
