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

  constructor(private pcService: PcService) { }

  ngOnInit(): void {
    // change trainerId to pull from storage after testing
    this.getBoxesForTrainer(1)
    this.getTeamForTrainer(1)
  }

  public getBoxesForTrainer(trainerId: number) {
    this.pcService.getBoxesByTrainer(trainerId)
    .subscribe(
      data => {
        console.log("Get boxes for trainer called")
        console.log(data)
        this.boxes = data;
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
        this.getBoxesForTrainer(1)
      }
    )
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
        this.getBoxesForTrainer(1)
        this.selectBoxById(boxId)
        console.log(this.selectedBox)
        
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
    this.selectedPokemon=poke;
  }

  public selectFromBox(){
    this.pokeFromBox = true;
  }

  public selectOutsideBox(){
    this.pokeFromBox = false;
  }

}
