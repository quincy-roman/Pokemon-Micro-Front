import {environment} from '../../environments/environment';
import {Trainer} from '../models/Trainer.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginDAO} from '../models/LoginDAO';
import {Router} from '@angular/router';
import {InterceptorService} from './interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '/',
      'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
    })
  };

  constructor(private http: HttpClient, private router: Router, private intercept: InterceptorService) {
  }


  register(trainer: Trainer): Observable<number> {
    return this.http.post<number>(`${environment.loginServerURL}/register`, trainer);
  }

  login(loginDAO: LoginDAO): Observable<any> {
    const email = loginDAO.email;
    const password = loginDAO.password;
    return this.http.post<any>(`${environment.loginServerURL}/login`,
      {email, password}, this.httpOptions)
      .pipe(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(loginDAO));
        // this.router.navigate([('/home')]);
        return user;
      });
  }

}
