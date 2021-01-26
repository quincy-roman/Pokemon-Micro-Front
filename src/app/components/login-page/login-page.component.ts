import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDAO} from '../../models/LoginDAO';
import {Observable} from 'rxjs';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private loginUrl = 'login';


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) {}


  ngOnInit()
  : void {
  }

  onSubmit(): Observable<LoginDAO>{
    const logindetails = new LoginDAO(this.loginForm.username, this.loginForm.password);
    console.log(this.loginForm.login);
    return this.http.post<LoginDAO>(this.loginUrl, logindetails, this.httpOptions);
  }

}
