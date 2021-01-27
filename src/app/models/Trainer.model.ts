export class Trainer {

  trainerId: number;
  name: string;
  email: string;
  password: string;
  poke: number;

  constructor(id: number, email: string, password: string, name: string, poke: number) {
    this.trainerId = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.poke = poke;
  }
}
