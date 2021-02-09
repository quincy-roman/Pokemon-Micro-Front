import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PcBox } from '../models/pc-box';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class PcService {


  

  pcDevURL : string = "http://localhost:8084/pc"
  teamDevURL : string = "http://localhost:8084/team"

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

  getTeamByTrainer(trainerId: number): Observable<Team> {
    // future: change trainerId from input param to pulling from session storage
    return this.http.get<Team>(`${this.teamDevURL}/${trainerId}`, this.httpOptions)
  }

  transferToTeam(teamId: number, pokemonId: number): Observable<String> {
    // const params = new HttpParams()
    //   .set('teamId', `${teamId}`)
    //   .set('pokemonId', `${pokemonId}`);
    // console.log(params.toString())
    // var body = {'teamId' : teamId}
    console.log("within PC service transferToTeam Method");
    const body = {"teamId" : teamId}
    console.log(body)
    return this.http.put<any>(`${this.pcDevURL}/removePokemon/${pokemonId}`, body, this.httpOptions)

    // return this.http.put<any>(`${this.pcDevURL}/removePokemon/${pokemonId}`, teamId,  this.httpOptions)
  }

}
