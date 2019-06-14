import { AuthGuard } from './guards/auth-guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { IngresoComponent } from './paginas/ingreso/ingreso.component';
import { ErrorComponent } from './paginas/error/error.component';
import { NotfoundComponent } from './paginas/notfound/notfound.component';
import { TemplateComponent } from './paginas/template/template.component';
import { UnauthGuard } from './guards/unauth-guard.guard';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'ingreso', component: IngresoComponent},
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: '**', component: NotfoundComponent },
      { path: 'error', component: ErrorComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


