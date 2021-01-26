import {environment} from '../../environments/environment';
import {Trainer} from '../models/Trainer.model';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {LoginDAO} from '../models/LoginDAO';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
  }


  register(trainer: Trainer): Observable<number> {
    return this.http.post<number>(`${environment.loginServerURL}/register`, trainer);
  }

  login(loginDAO: LoginDAO): Observable<any> {
    const username = loginDAO.username;
    const password = loginDAO.password;
    return this.http.post<any>(`${environment.loginServerURL}/login`,
      { username, password })
      .pipe(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(loginDAO));
        // this.router.navigate([('/home')]);
        return user;
      });
  }

}
