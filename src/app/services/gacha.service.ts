import { TrainerRolls } from './../models/TrainerRolls.model';
import { OwnedPokemon } from './../models/OwnedPokemon.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class GachaService {

  constructor(private http: HttpClient) { }



  rollgacha(numOfRolls:number):Observable<OwnedPokemon[]>
  {
    let trainerId = 1;
    let rollInfo = new TrainerRolls(trainerId,numOfRolls);
    console.log(rollInfo)
    return this.http.post<OwnedPokemon[]>(`http://localhost:8081/gacha/roll`,rollInfo);
  }
}
