import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActoresService } from 'src/app/servicios/actor.service';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  constructor(private builder: FormBuilder, private actoresService: ActoresService, private peliculasService:PeliculasService) { }

  public ok = false;
  public actores;

  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);


  tipo = new FormControl('', [
    Validators.required
  ]);



  actor = new FormControl('', [
    Validators.required
  ]);

  cantidadPublico = new FormControl('', [
    Validators.required
  ]);


  fechaEstreno = new FormControl('', [
    Validators.required
  ]);

  crearForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    tipo: this.tipo,
    actor: this.actor,
    fechaEstreno: this.fechaEstreno,
    cantidadPublico: this.cantidadPublico
  });

  private limpiar() {
    // TODO
  }

  Crear() {
    const nombre = this.crearForm.get('nombre').value;
    const tipo = this.crearForm.get('tipo').value;
    const actor = this.crearForm.get('actor').value;
    const fechaEstreno = this.crearForm.get('fechaEstreno').value;
    const cantidadPublico = this.crearForm.get('cantidadPublico').value;
    this.peliculasService.crear(nombre, tipo, actor, fechaEstreno,cantidadPublico).then(data => {
      this.ok = true;
      this.limpiar()
    });

  }



  private cargarActores() {
    this.actoresService.listar().then(data => {
      this.actores = data;
    });
  }

  ngOnInit() {
    this.cargarActores();
  }

}
