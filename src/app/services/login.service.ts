import { environment } from '../../environments/environment';
import { Trainer } from '../models/Trainer.model';
import { Injectable } from '@angular/core';
import { fromEventPattern, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  register(trainer:Trainer):Observable<number>
  {
    let id;
    return this.http.post<number>(`${environment.loginServerURL}/register`,trainer)
  }


}
