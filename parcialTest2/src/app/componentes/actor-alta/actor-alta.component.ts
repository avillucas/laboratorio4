import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { ActoresService } from 'src/app/servicios/actor.service';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  constructor(private builder: FormBuilder, private actoresService: ActoresService) { }

  public ok = false;

  tipo = new FormControl('', [
    Validators.required
  ]);

  nombre = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);

  apellido = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);


  nacionalidad = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);


  fechaNacimiento = new FormControl('', [
    Validators.required
  ]);

  crearForm: FormGroup = this.builder.group({
    nombre: this.nombre,
    apellido: this.apellido,
    nacionalidad: this.nacionalidad,
    fechaNacimiento: this.fechaNacimiento,
  });

  private limpiar() {
// TODO
  }

  Crear() {
    const nombre = this.crearForm.get('nombre').value;
    const apellido = this.crearForm.get('apellido').value;
    const nacionalidad = this.crearForm.get('nacionalidad').value;
    const fechaNacimiento = this.crearForm.get('fechaNacimiento').value;
    this.actoresService.crear(nombre, apellido, nacionalidad, fechaNacimiento).then(data => {
      this.ok = true;
      this.limpiar()
    });

  }


  ngOnInit() {
  }

}
