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
  constructor(private builder: FormBuilder, private heladosService: HeladoService) {}

  tipo = new FormControl("", [
    Validators.required
  ]);

  sabor = new FormControl("", [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(255)
  ]);

  kilos = new FormControl("", [Validators.required]);

  crearForm: FormGroup = this.builder.group({
    tipo: this.tipo,
    kilos: this.kilos,
    sabor: this.sabor
  });

  Crear() {
    let sabor = this.crearForm.get("sabor").value;
    let tipo = this.crearForm.get("tipo").value;
    let kilos = this.crearForm.get("kilos").value;
    this.heladosService.crear(sabor, tipo,kilos).then(data => {
      console.info(data);
    });
  }

  ngOnInit() {}
}
