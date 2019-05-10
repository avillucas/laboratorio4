import { Injectable } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {
  constructor(public miHttp: MyhttpService) { }

  public listar(): Promise<Array<any>> {
    return this.miHttp
      .httpGetP("http://localhost:8080/actores/")
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
    //return null;
  }

  public borrar(id): Promise<Array<any>> {
    return this.miHttp
      .httpGetP("http://localhost:8080/actores/borrar/" + id + "/")
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
    //return null;
  }

  public crear(nombre, apellido, nacionalidad, fechaNacimiento): Promise<Array<any>> {
    let data = { 'nombre': nombre, 'apellido': apellido, 'nacionalidad': nacionalidad, 'fechaNacimiento': fechaNacimiento };
    return this.miHttp.httpPostP("http://localhost:8080/actores/alta", data)
      .then(data => {
        console.log(data);
        return data;
      })
      .catch(err => {
        console.log(err);
        return null;
      });
    return null;
  }
}
