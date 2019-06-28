# Parcial2
Armar elementos
Manejar mascotas :
Crear componentes:
   - mascotaAlta = formularios que dispara en la creacion de los datos
   - mascotaPerfil = formularios que dispara en la creacion de los datos
   - mascotaListar = tabla que lista las mascotas que existen
   - mascotas = pagina que contempla la union de los formularios

GLOSARIO :
Usuario ABS : entidad que tiene acceso al sistema ya identificado dentro del sistema  .
Cliente: Usuario responsable de una mascota que dentro del sistema se hace cargo de la mascota  y funciona como cliente de la clinica .
Veterinario: Usuario que puede atender mascotas
Mascota: Animal que es atendido en la clinica , pertenece a un solo responsable
DSNAU: ( Datos Segmentados por Nivel de Acceso de Usuario ) Los datos que se muestran estan segmentados en base al tipo o nivel de acceso del usuario; Ej: Un cliente en GET api/mascostas/ solo vera las mascostas de las que sea responsable

Usuario
  * email : string
  * password : string
  esAdmin : boolean

Cliente : Usuario
Veterinario : Usuario
Administrador: Usuario
Mascota
  - animal : Animal
  - raza: Raza
  - nombre: string
  - edad: numeric
  - responsable: Cliente
  - foto: string

Se asume un horario de la clinica de 9 a 18 , con un bloque de turnos de 40 minutos aprox por cada turno , teniendo un break de 1 hora en el mediodia;
se asume tambien que todos los veterinarios atienden a la vez en consultorios paralelos por lo que se pueden emitir turnos paralelos para cada uno .



API (api/):
A - GET turnos/  | Turno[] en base al usuario logueado por token : los valores de cliente llegan vacios en caso de paciente llegan vacios en caso de estar disponibles
A1 - GET turnos/medicoId/  | Turnos[] en base al usuario y medico solicitado logueado por token : los valores de cliente llegan vacios en caso de paciente llegan vacios en caso de estar disponibles
B - POST turno/ {time:dd-mm-YY hh:mm:ss, paciente, medico}| 201
C - POST mascota/ {animal,raza,nombre,edad,responsableId,foto}| 201
D - GET mascotas/ | Mascota[]
D1 - GET mascotas/responsableId/ | Mascota[]

Revisar guard 

Componentes :
 
Alta de mascotas 
Listar Mascotas 
Alta de Turnos 
Lista Turnos


ESTRUCTURAS : 
turnos/{turnoId}/
 - fechas  time 
 - mascotas: map de datos de la mascota 
 - veterinario : map de datos del veterinario
usuarios/{usuarioId}
  - mascotas: usuarios/{usuarioId}/mascotas/{mascotasId}
  - turnos: usuarios/{usuarioId}/turnos/{turnoId}
  - admin : boolean
  - veterinario : boolean 
  - nombre : string 
  - uid : string
  - email : string


REGLAS : 
service cloud.firestore {
  match /databases/{database}/documents {
 
    match /usuarios/{userId} {
        allow read, write: if isOwner(userId);
        allow read, write: if isAdmin();
    }
    
    match /turnos/{documents=**} {
        allow read, write: if isAdmin();
    }

    // Reusable function to determine document ownership
    function isOwner(userId) {
        return request.auth.uid == userId
    }
    
    function isAdmin() {
        return request.auth.uid == 'Ju0ppORcdhSVzs4EoXcVKZeDWR33'
    }
  }
}


PROCESO DE SOLICITUD DE TURNO
- Se realiza una peticion a (A) este retorna turnos, desde ahi se le muestran los disponibles al paciente que elije uno y toma al seleccionar se le envia una peticion a (B)



Turno
  - paciente : Mascota
  - solicitante: Cliente
  - medico : Veterinario
  - fecha: DateTime


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

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
