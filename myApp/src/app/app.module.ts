import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './componente/error/error.component';
import { LoginComponent } from './componente/login/login.component';
import { HomeComponent } from './componente/home/home.component';
import { ComponenteConImputComponent } from './componente/componente-con-imput/componente-con-imput.component';
import { ComponenteAComponent } from './componente/componente-a/componente-a.component';
import { ComponenteBComponent } from './componente/componente-b/componente-b.component';
import { ComponenteCComponent } from './componente/componente-c/componente-c.component';
import { InicioComponent } from './componente/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    ComponenteConImputComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ComponenteCComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
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
