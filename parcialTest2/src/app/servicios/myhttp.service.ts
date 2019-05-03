import { Injectable } from "@angular/core";
import { log } from "util";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MyhttpService {
  constructor(public http: Http) { }

  public httpGetP(url: string) {
    return this.http
      .get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    return this.http.post(url, objeto).toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpGetO(url: string): Observable<any> {
    return this.http
      .get(url)
      .pipe(catchError(this.handleError("Error al obtener los objetos")));
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }
}
