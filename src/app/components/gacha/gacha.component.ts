import { GachaService } from './../../services/gacha.service';
import { OwnedPokemon } from './../../models/OwnedPokemon.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gacha',
  templateUrl: './gacha.component.html',
  styleUrls: ['./gacha.component.css']
})
export class GachaComponent implements OnInit {

  constructor(private gachaServ:GachaService) { }



  ngOnInit(): void {
  }

public rolledPokemon:OwnedPokemon[] = [];

roll()
{
  this.gachaServ.rollgacha(1).subscribe(
    data => {
      this.rolledPokemon=data
      console.log(this.rolledPokemon);

    }
  )

}



}
