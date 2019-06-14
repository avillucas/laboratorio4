export abstract class Usuario {
  private email: string;
  private password: string;
  protected admin: boolean;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
    this.admin = false;
  }

  public set Email(value: string) {
    this.email = value;
  }

  public get Email(): string {
    return this.email;
  }

  public get Password(): string {
    return this.password;
  }

  public set Password(value: string) {
    this.password = value;
  }
}
