import { AuthGuard } from './guards/auth.guard';
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
import { ProfileComponent } from './paginas/profile/profile.component';
import { UsuariosService } from './servicios/usuarios.service';
import { TurnosService } from './servicios/turnos.service';
import { MascostasService } from './servicios/mascostas.service';
import { MascotasAltaComponent } from './paginas/mascotas-alta/mascotas-alta.component';
import { MascotasListarComponent } from './paginas/mascotas-listar/mascotas-listar.component';
import { TipoanimalPipe } from './pipes/tipoanimal.pipe';
import { ChatComponent } from './paginas/chat/chat.component';
import { MateriasComponent } from './paginas/materias/materias.component';
import { MateriasListaComponent } from './paginas/materias-lista/materias-lista.component';
import { MateriasCrearComponent } from './paginas/materias-crear/materias-crear.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    DashboardComponent,
    ErrorComponent,
    IngresoComponent,
    NotfoundComponent,
    TemplateComponent,
    ProfileComponent,
    MascotasAltaComponent,
    MascotasListarComponent,
    TipoanimalPipe,
    ChatComponent,
    MateriasComponent,
    MateriasListaComponent,
    MateriasCrearComponent
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
  providers: [AuthService, UsuariosService, TurnosService, MascostasService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
