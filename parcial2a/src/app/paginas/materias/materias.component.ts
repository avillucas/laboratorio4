import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from 'events';
import { Materia } from 'src/app/clases/materia';
import { MateriaService } from 'src/app/servicios/materia.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  public materias: Array<Materia>;


  constructor(private mService: MateriaService) {
    this.materias = new Array<Materia>();
  //  this.materias.push(new Materia('asdasdasd',1,20,'ASas'));
  }

  agregarALista(materia: Materia) {
    console.info('agregada', materia);
    console.info(this.materias);
  }

  ngOnInit() {
    this.mService.traerTodos().subscribe(result => {
      this.items = result;
    })
    /*
    subscribe(data => {
      this.materias = data.map(e => {
        return { ...e.payload.doc.data() } as Materia;
      });
    });

    console.info(this.materias);
    */
  }

}
