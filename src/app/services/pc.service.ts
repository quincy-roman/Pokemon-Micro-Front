import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PcBox } from '../models/pc-box';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  pcDevURL : string = "http://localhost:8084/pc"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '/',
      'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
    })
  };

  constructor(private http: HttpClient) { }


  getBoxesByTrainer(trainerId: number): Observable<PcBox[]> {
    // future: change trainerId from input param to pulling from session storage
    return this.http.get<PcBox[]>(`${this.pcDevURL}/retrieve/${trainerId}`, this.httpOptions)
  }

}
