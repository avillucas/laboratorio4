export interface IPersistible {
  DAOData(data: any): any;
  DataDAO(idata:any): any;
  //abstract get DAOIdentificador(): string;
  //abstract get DAOReferencia(): string;
  // abstract DAOFromMap(map: any): any;
  // abstract DAOtoMap(): any;

}
