export abstract class Persistible {
  abstract get DAOData(): any;
  abstract get DAOIdentificador(): string;
}
