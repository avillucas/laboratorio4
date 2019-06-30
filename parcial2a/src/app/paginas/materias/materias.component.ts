import { Component, OnInit, Output, Input } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { IMateria } from '../../models/materia.model';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materias: any;

  constructor(private mService: MateriaService) {
  }

  agregarALista(materia: Materia) {
    console.info(this.materias);
  }

  ngOnInit() {
    this.materias = this.mService.Observable;
  }

}
