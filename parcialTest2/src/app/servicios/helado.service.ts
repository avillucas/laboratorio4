import { Injectable } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Injectable({
  providedIn: 'root'
})
export class HeladoService {
  constructor(public miHttp: MyhttpService) {}

  public listar(): Promise<Array<any>> {
    return this.miHttp
      .httpGetP("http://localhost:8080/productos/")
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
      .httpGetP("http://localhost:8080/productos/borrar/"+id+"/")
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

  public crear(tipo,descripcion,fechaVencimiento,cantidad): Promise<Array<any>> {
    let data = {'tipo':tipo,'descripcion':descripcion,'fechaVencimiento':fechaVencimiento,'cantidad':cantidad};
    return  this.miHttp.httpPostP("http://localhost:8080/productos/alta",data)
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
