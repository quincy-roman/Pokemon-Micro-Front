import { GachaService } from './../../services/gacha.service';
import { Team } from './../../models/team';
import { OwnedPokemon } from './../../models/OwnedPokemon.model';
import { PcService } from './../../services/pc.service';
import { Component, OnInit } from '@angular/core';
import { PcBox } from 'src/app/models/pc-box';

@Component({
  selector: 'app-pc-page',
  templateUrl: './pc-page.component.html',
  styleUrls: ['./pc-page.component.css']
})
export class PcPageComponent implements OnInit {

  boxes: PcBox[];
  selectedBox: PcBox;
  selectedPokemon: OwnedPokemon;
  team: Team;
  pokeFromBox: boolean;
  activeBoxId: number;
  trainerId: number;

  apiData: any;
  num: number;
  sprite: any;

  constructor(private pcService: PcService,
              private gachaService: GachaService) { }

  ngOnInit(): void {
    this.trainerId = parseInt(sessionStorage.getItem('userId'))
    // change trainerId to pull from storage after testing
    this.updateBoxesForTrainer(this.trainerId)
    this.getBoxesForTrainer(this.trainerId)
    this.getTeamForTrainer(this.trainerId)
  }
  public updateBoxesForTrainer(trainerId: number) {
    this.pcService.updateBoxes(trainerId)
    .subscribe(
      data => {
        console.log(data)
      }
    )
  }

  public getBoxesForTrainer(trainerId: number) {
    this.pcService.getBoxesByTrainer(trainerId)
    .subscribe(
      data => {
        console.log("Get boxes for trainer called")
        console.log(data)
        this.boxes = data;
        if (!this.activeBoxId){
          this.activeBoxId = this.boxes[0].boxId
        }
        this.selectBoxById(this.activeBoxId)
      }
    )
  }

  public getTeamForTrainer(trainerId: number){
    this.pcService.getTeamByTrainer(trainerId)
    .subscribe(
      data => {
        console.log("Get team for trainer called")
        console.log(data)
        this.team = data
      }
    )
  }

  public transferToTeam(teamId: number, pokemonId: number){
    console.log("Transfer to team button clicked")
    console.log(`Team: ${teamId}`)
    console.log(`Pokemon: ${pokemonId}`)
    this.pcService.transferToTeam(teamId, pokemonId)
    .subscribe(
      data => {
        console.log(data)
        this.getTeamForTrainer(1)
        this.activeBoxId = this.selectedBox.boxId;
        this.getBoxesForTrainer(1)
      }
    )
    this.selectedPokemon=null;
  }

  public transferToBox(boxId: number, pokemonId: number){
    console.log("Transfer to box button clicked")
    console.log(`Box: ${boxId}`)
    console.log(`Pokemon: ${pokemonId}`)
    this.pcService.transferToBox(boxId, pokemonId)
    .subscribe(
      data => {
        console.log(data)
        this.getTeamForTrainer(1)
        this.activeBoxId = boxId;
        this.getBoxesForTrainer(1)
      }
    )
    this.selectedPokemon=null;
  }

  public getPokeSprite(name: string){
    this.gachaService.getSprite(name).subscribe(
      d => {
        this.apiData = d;
        this.num = this.apiData.id;
        // console.log(this.apiData)
        // console.log(this.num)
        let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.num}.svg`;
        this.sprite=url
        // console.log(this.sprite)
      }
    )
  }

  public selectBox(box: PcBox){
    this.selectedBox=box;
  }

  public selectBoxById(boxId: number){
    this.boxes.forEach(box => {
      if (box.boxId == boxId){
        this.selectedBox=box;
      }
    });
  }

  public selectPokemon(poke: OwnedPokemon){
    this.getPokeSprite(poke.species)
    this.selectedPokemon=poke;
  }

  public selectFromBox(){
    this.pokeFromBox = true;
  }

  public selectOutsideBox(){
    this.pokeFromBox = false;
  }

}
