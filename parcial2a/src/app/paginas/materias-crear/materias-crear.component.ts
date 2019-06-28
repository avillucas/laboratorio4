import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/servicios/materia.service';
import { Profesor } from 'src/app/clases/profesor';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-materias-crear',
  templateUrl: './materias-crear.component.html',
  styleUrls: ['./materias-crear.component.css']
})
export class MateriasCrearComponent implements OnInit {
  // Usamos el decorador Output
  @Output() EnviarMateria = new EventEmitter();

  public NombreControl: FormControl;
  public CuatrimestreControl: FormControl;
  public CupoControl: FormControl;
  public ProfesorControl: FormControl;
  public MateriaForm: FormGroup;


  constructor(private builder: FormBuilder, private authService: AuthService, private router: Router, private mService: MateriaService) {
    this.NombreControl = new FormControl(this.NombreControl, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]);

    this.CuatrimestreControl = new FormControl(this.CuatrimestreControl, [
      Validators.required
    ]);

    this.CupoControl = new FormControl(this.CupoControl, [
      Validators.required
    ]);

    this.ProfesorControl = new FormControl(this.ProfesorControl, [
      Validators.required
    ]);

    this.MateriaForm = this.builder.group({
      nombre: this.NombreControl,
      cuatrimestre: this.CuatrimestreControl,
      cupo: this.CupoControl,
      profesor: this.ProfesorControl,
    });
  }

  public get NombreInput() {
    return this.MateriaForm.get('nombre');
  }

  public get CuatrimestreInput() {
    return this.MateriaForm.get('cuatrimestre');
  }
  public get CupoInput() {
    return this.MateriaForm.get('cupo');
  }

  public get ProfesorInput() {
    return this.MateriaForm.get('profesor');
  }

  private profesores: Usuario[];

  CrearMateria() {
    const nombre = this.NombreInput.value;
    const cuatrimestre = this.CuatrimestreInput.value;
    const cupo = this.CupoInput.value;
    const profesor = this.profesores[this.ProfesorInput.value];
    const materiaNueva = new Materia(nombre, cuatrimestre, cupo, profesor.Nombre);
    this.mService.crear(materiaNueva).then(res => {
      // TODO mejorar esto
      materiaNueva.id = res.id;
      this.mService.actualizar(materiaNueva).then(res => {
        // TODO agregar al profesor la materia estre sus datos
        this.EnviarMateria.emit({ materia: materiaNueva });
      },
        err => {
          alert('Error al crear la materia');
          console.log(err);
        }
      );

    },
      // TODO pasar esto a manejador de errores mas general
      // TODO definir una forma de mostrar los errores centralizada para el template
      err => {
        alert('Error al crear la materia');
        console.log(err);
      }
    );
  }


  ngOnInit() {
    this.profesores = new Array<Profesor>();
    //TODO reemplazar
    this.profesores.push(new Profesor(environment.usuarios[1].email, environment.usuarios[1].password, 'profesor'));
    this.ProfesorInput.setValue(0);
    this.CupoInput.setValue(20);
    this.CuatrimestreControl.setValue(1);

  }

}
