import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Input() productos;
  @Output() enviarEncontrados = new EventEmitter();
  elementoEncontrado: any;


  constructor(private builder: FormBuilder) {
  }

  hint = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
    Validators.maxLength(255)
  ]);

  buscarForm: FormGroup = this.builder.group({
    hint: this.hint
  });

  ngOnInit() {
  }

  Buscar() {
    const buscado = this.buscarForm.get('hint').value;
    // tslint:disable-next-line: forin
    for (const a in this.productos) {
      if (this.productos[a].descripcion.indexOf(buscado) !== -1) {
        this.elementoEncontrado = this.productos[a];
        break;
      }
    }
    // Usamos el método emit
    this.enviarEncontrados.emit({ encontrado: this.elementoEncontrado });
  }


}
