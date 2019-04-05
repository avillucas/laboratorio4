import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Profesor } from 'src/app/clases/profesor';

@Component({
  selector: 'app-tabla-profesor',
  templateUrl: "./tabla-profesor.component.html",
  styleUrls: ["./tabla-profesor.component.css"]
})
export class TablaProfesorComponent implements OnInit {
  @Input() listadoProfesores: Profesor[];
  @Output() profesorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {}
  mostrarDetalles(parametroProfesor) {
    this.profesorSeleccionado.emit(parametroProfesor);
  }
}
