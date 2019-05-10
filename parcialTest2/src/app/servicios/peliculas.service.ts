import { Injectable } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  constructor(public miHttp: MyhttpService) {}

  public listar(): Promise<Array<any>> {
    return this.miHttp
      .httpGetP("http://localhost:8080/peliculas/")
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
      .httpGetP("http://localhost:8080/peliculas/borrar/"+id+"/")
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

  public crear(nombre, tipo, actor, fechaEstreno,cantidadPublico): Promise<Array<any>> {
    let data = {'nombre':nombre,'actor':actor,'tipo':tipo,'fechaEstreno':fechaEstreno,'cantidadPublico':cantidadPublico};
    return  this.miHttp.httpPostP("http://localhost:8080/peliculas/alta",data)
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
