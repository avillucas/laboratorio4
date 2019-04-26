import { MyhttpService } from './servicios/myhttp.service';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeladosListaComponent } from './componentes/helados-lista/helados-lista.component';
import { HeladoCrearComponent } from './componentes/helado-crear/helado-crear.component';
import { BotonModificarComponent } from './componentes/boton-modificar/boton-modificar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeladosListaComponent,
    HeladoCrearComponent,
    BotonModificarComponent
  ],
  imports: [
    BrowserModule,
// tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
