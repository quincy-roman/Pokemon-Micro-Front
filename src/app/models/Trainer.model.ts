export class Trainer{

    id:number;
    email:string;
    password:string;
    username:string;
    money:number;

    constructor(id:number,email:string,password:string,username:string,money:number)
    {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.money = money;
    }


}