import { Injectable } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Injectable({
  providedIn: 'root'
})
export class HeladoService {
  constructor(public miHttp: MyhttpService) {}
  public listar(): Promise<Array<any>> {
    return this.miHttp
      .httpGetP("http://localhost:8080/helados/")
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
}
