export class LoginDAO {
  email: string;
  password: string;

  constructor(username: string, password: string) {
    this.email = username;
    this.password = password;
  }
  getUser(): string{
    return this.email;
  }

  getPass(): string{
    return this.password;
  }

}
