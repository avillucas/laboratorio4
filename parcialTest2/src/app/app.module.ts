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
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';
import { ActorAltaComponent } from './componentes/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/actor-listado/actor-listado.component';
import { ActorComponent } from './componentes/actor/actor.component';
import { PeliculaAltaComponent } from './componentes/pelicula-alta/pelicula-alta.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { PeliculasActoresComponent } from './componentes/peliculas-actores/peliculas-actores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeladosListaComponent,
    HeladoCrearComponent,
    BotonModificarComponent,
    BuscadorComponent,
    ErrorComponent,
    VentasListarComponent,
    VentasCrearComponent,
    BotonBorrarComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    ActorComponent,
    PeliculaAltaComponent,
    PortadaComponent,
    PeliculasActoresComponent
  ],
  imports: [
    BrowserModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: PortadaComponent,
      },
      {
        path: 'peliculas',
        component: PeliculaAltaComponent,
        children: [
          {
            path: 'alta',
            component: PeliculaAltaComponent,
          },
        ]
      },
      {
        path: 'actor',
        component: ActorAltaComponent,
        children: [
          {
            path: 'alta',
            component: ActorAltaComponent
          },
          {
            path: 'listado',
            component: ActorListadoComponent
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
