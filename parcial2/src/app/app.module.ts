import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthService } from './servicios/auth.service';
import { LayoutModule } from 'angular-admin-lte';
import { BoxModule } from 'angular-admin-lte';
import { adminLteConf } from '../environments/admin-lte.config';
import { RegistroComponent } from './paginas/registro/registro.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { ErrorComponent } from './paginas/error/error.component';
import { IngresoComponent } from './paginas/ingreso/ingreso.component';
import { NotfoundComponent } from './paginas/notfound/notfound.component';
import { TemplateComponent } from './paginas/template/template.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    DashboardComponent,
    ErrorComponent,
    IngresoComponent,
    NotfoundComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule.forRoot(adminLteConf),
    BoxModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
