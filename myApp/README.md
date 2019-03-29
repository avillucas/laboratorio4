# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


levantar la aplicacion 
crear el componente login 
crear un comeponente de error 

path "*.*"  ErrorComponent
path " " LoginComponent 

bajar algun pedazo de login de alguna pagina para  que quede levantado . 
EL route se puede hacer en un componenete o ponerlo dentro del controler 
tambien se lopuede pner dentro de constantes 

<router-outlet> </>
<router-link="/login">

crear la clase usuario  ponerle email y clave , ponerle  el doble binding 

FormModule

ng g component  componente/error
ng g component  componente/login
ng g component  componente/home
ng g class class/usuario



private email:string;
private clave:string;



<div class="container">
  <h1>Iniciar sesión</h1>
  
  <form class="form">
    <input type="text" [(ngModel)]="usuario.email" placeholder="Email">
    <input type="password"  [(ngModel)]="usuario.password" placeholder="Password">
    <button type="submit" (click)="login()" id="login-button">Login</button>
  </form>
</div>

El @Input() recibe un dato que va a llegar desde el htmlcon el formato <ETIQUETA DEL COMPONENTE dato="hola" >

Entonces al componente se le pasa el dato con el que se carga por medio de un dato ,entonces un tabla por ejemplo en el que levanta esos datos por medio del input entonces esta mostrando los datos actualizados de los usuarios que reciba por imput 


ALTA Crea 
COmponente en el medio toma el del atlta 
Muestra  lista el 
