import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PcBox } from '../models/pc-box';
import { Team } from '../models/team';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PcService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '/',
      'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
    })
  };

  constructor(private http: HttpClient) { }

  updateBoxes(trainerId: number) {
    return this.http.put<any>(`${environment.BASE_URL}/pc/updateBoxes/${trainerId}`, this.httpOptions)
  }

  getBoxesByTrainer(trainerId: number): Observable<PcBox[]> {
    // future: change trainerId from input param to pulling from session storage
    return this.http.get<PcBox[]>(`${environment.BASE_URL}/pc/retrieve/${trainerId}`, this.httpOptions)
  }

  getTeamByTrainer(trainerId: number): Observable<Team> {
    // future: change trainerId from input param to pulling from session storage
    return this.http.get<Team>(`${environment.BASE_URL}/pc/team/${trainerId}`, this.httpOptions)
  }

  transferToTeam(teamId: number, pokemonId: number): Observable<String> {
    console.log("within PC service transferToTeam Method");
    return this.http.put<any>(`${environment.BASE_URL}/pc/removePokemon/${pokemonId}`, teamId, this.httpOptions)
  }

  transferToBox(boxId: number, pokemonId: number) {
    console.log("within PC service transferToTeam method")
    return this.http.put<String>(`${environment.BASE_URL}/pc/addPokemon/${pokemonId}`, boxId, this.httpOptions)
  }

}
