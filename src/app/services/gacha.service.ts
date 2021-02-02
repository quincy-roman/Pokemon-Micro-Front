import { TrainerRolls } from './../models/TrainerRolls.model';
import { OwnedPokemon } from './../models/OwnedPokemon.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GachaService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '/',
      'Access-Control-Allow-Methods': 'OPTIONS, HEAD, GET, POST, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, X-Auth-Token, content-type'
    })
  };

  constructor(private http: HttpClient) { }



  rollgacha(numOfRolls: number): Observable<OwnedPokemon[]>
  {
    const trainer = sessionStorage.getItem('userId');
    if (trainer != null)
    {
      const trainerId = Number.parseInt(trainer);
      const rollInfo = new TrainerRolls(trainerId, numOfRolls);
      console.log(rollInfo);
      return this.http.post<OwnedPokemon[]>(`${environment.BASE_URL}/gacha/roll`, rollInfo, this.httpOptions);
    }
    else{
      return new Observable<OwnedPokemon[]>();
    }

  }

  // tslint:disable-next-line: typedef
  getSprite(name: string): Observable<string>{
    return this.http.get<string>(`https://pokeapi.co/api/v2/pokemon/${name}`, this.httpOptions);
  }
}
