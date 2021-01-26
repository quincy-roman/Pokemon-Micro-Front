import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDAO} from '../../models/LoginDAO';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm = this.loginBuilder.group({
    username: new FormControl(''),
    password: new FormControl('')
  });
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '/',
      'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
    })};

  private loginUrl = 'login';


  constructor(
    private loginBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) {
  }


  ngOnInit()
    : void {
    this.loginForm = this.loginBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void{
    console.log('button pushed.');
    const details = this.loginForm.value;
    const logindetails = new LoginDAO(details.username, details.password);
    this.loginService.login(logindetails).subscribe((data: any) => {
      console.log(data);
      alert(data.message);
    });
  }
  // ROUTE TO HOMEPAGE
}
