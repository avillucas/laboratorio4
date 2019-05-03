import { MyhttpService } from './servicios/myhttp.service';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeladosListaComponent } from './componentes/helados-lista/helados-lista.component';
import { HeladoCrearComponent } from './componentes/helado-crear/helado-crear.component';
import { BotonModificarComponent } from './componentes/boton-modificar/boton-modificar.component';
import { RouterModule, OutletContext } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscadorComponent } from './componente/buscador/buscador.component';
import { ErrorComponent } from './componentes/error/error.component';
import { VentasListarComponent } from './componentes/ventas-listar/ventas-listar.component';
import { VentasCrearComponent } from './componentes/ventas-crear/ventas-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    HeladosListaComponent,
    HeladoCrearComponent,
    BotonModificarComponent,
    BuscadorComponent,
    ErrorComponent,
    VentasListarComponent,
    VentasCrearComponent
  ],
  imports: [
    BrowserModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'productos',
        component: HeladosListaComponent,
        children: [
          {
            path: 'alta',
            component: HeladoCrearComponent,
          },
        ]
      },
      {
        path: 'ventas',
        component: HeladosListaComponent,
        children: [
          {
            path: 'nueva',
            component: HeladoCrearComponent
          },
          {
            path: 'listado',
            component: HeladosListaComponent
          },
        ]
      },
      {
        path: 'busqueda',
        component: HeladosListaComponent
      },
      {
        path: '**',
        component: ErrorComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
