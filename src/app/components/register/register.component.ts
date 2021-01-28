import { FormBuilder, FormControl } from '@angular/forms';
import { Trainer } from './../../models/Trainer.model';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginServ:LoginService,private form:FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm = this.form.group({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl('')
  });

  registerUser()
  {
    const details = this.registerForm.value;
    let trainer = new Trainer(0,details.email,details.password,details.username,0);
    console.log(trainer);

     this.loginServ.register(trainer).subscribe(data => {
     let id = data
     sessionStorage.setItem("userId",id.toString());

    //Route to navigation/home page


    } );
  }



}
