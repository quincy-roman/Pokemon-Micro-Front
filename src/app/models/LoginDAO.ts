export class LoginDAO {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  getUser(): string{
    return this.username;
  }

  getPass(): string{
    return this.password;
  }

}
