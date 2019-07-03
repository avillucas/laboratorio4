import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Materia } from 'src/app/clases/materia';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MateriaService } from 'src/app/servicios/materia.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { TipoUsuario } from 'src/app/enums/tipo-usuario.enum';
import { IUsuarioId } from 'src/app/models/usuarioid.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-materias-crear',
  templateUrl: './materias-crear.component.html',
  styleUrls: ['./materias-crear.component.css']
})
export class MateriasCrearComponent implements OnInit {
  // Usamos el decorador Output
  @Output() EnviarMateria = new EventEmitter();

  private profesores: Observable<IUsuarioId[]>;

  public NombreControl: FormControl;
  public CuatrimestreControl: FormControl;
  public CupoControl: FormControl;
  public ProfesorControl: FormControl;
  public MateriaForm: FormGroup;


  constructor(private builder: FormBuilder, private uService: UsuariosService, private router: Router, private mService: MateriaService) {
    this.profesores = this.uService.traerPorTipo(TipoUsuario.profesor);

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

  public get Profesores(): Observable<IUsuarioId[]> {
    return this.profesores;
  }

  CrearMateria() {
    const nombre = this.NombreInput.value;
    const cuatrimestre = this.CuatrimestreInput.value;
    const cupo = this.CupoInput.value;
    const materiaNueva = new Materia(nombre, cuatrimestre, cupo, this.ProfesorInput.value);
    this.mService.crear(materiaNueva).then(res => {
      this.EnviarMateria.emit({ materia: materiaNueva });
    });
  }

  ngOnInit() {
    this.CupoInput.setValue(20);
    this.CuatrimestreControl.setValue(1);
  }

}
