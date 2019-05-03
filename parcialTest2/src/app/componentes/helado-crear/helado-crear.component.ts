import { HeladoService } from './../../servicios/helado.service';
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormBuilder,
  FormControl,
  FormGroup
} from "@angular/forms";

@Component({
  selector: "app-helado-crear",
  templateUrl: "./helado-crear.component.html",
  styleUrls: ["./helado-crear.component.css"]
})
export class HeladoCrearComponent implements OnInit {
  constructor(private builder: FormBuilder, private heladosService: HeladoService) { }

  tipo = new FormControl('', [
    Validators.required
  ]);

  descripcion = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(255)
  ]);
  fechaVencimiento = new FormControl('', [Validators.required]);

  cantidad = new FormControl('', [Validators.required]);

  crearForm: FormGroup = this.builder.group({
    tipo: this.tipo,
    cantidad: this.cantidad,
    descripcion: this.descripcion,
    fechaVencimiento: this.fechaVencimiento,
  });

  Crear() {

    let tipo = this.crearForm.get("tipo").value;
    let descripcion = this.crearForm.get("descripcion").value;
    let fechaVencimiento = this.crearForm.get("fechaVencimiento").value;
    let cantidad = this.crearForm.get("cantidad").value;
    this.heladosService.crear(tipo, descripcion, fechaVencimiento, cantidad).then(data => {
      console.info(data);
    });

  }

  ngOnInit() { }
}
