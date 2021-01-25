import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Trainer } from '../models/Trainer.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginServ:LoginService) { }

  ngOnInit(): void {
  }

  public trainer:Trainer = new Trainer(0,'','','',0);
  registerUser()
  {

     this.loginServ.register(this.trainer).subscribe(data => {
     let id = data
     sessionStorage.setItem("trainerID",id.toString());

    //Route to navigation/home page


    } );
  }



}
