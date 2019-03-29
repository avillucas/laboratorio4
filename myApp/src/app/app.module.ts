import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './componente/error/error.component';
import { LoginComponent } from './componente/login/login.component';
import { HomeComponent } from './componente/home/home.component';
import { ComponenteConImputComponent } from './componente/componente-con-imput/componente-con-imput.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LoginComponent,
    HomeComponent,
    ComponenteConImputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'home/:nombre',
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
