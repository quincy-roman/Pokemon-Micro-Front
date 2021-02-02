import { GachaService } from './../../services/gacha.service';
import { OwnedPokemon } from './../../models/OwnedPokemon.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gacha',
  templateUrl: './gacha.component.html',
  styleUrls: ['./gacha.component.css']
})
export class GachaComponent implements OnInit {

  constructor(private gachaServ: GachaService, private changeDetect: ChangeDetectorRef) { }



  ngOnInit(): void {
  }

// tslint:disable-next-line: member-ordering
public rolledPokemon: OwnedPokemon[] = [];

// tslint:disable-next-line: member-ordering
public sprite: string;

roll()
{
  this.gachaServ.rollgacha(1).subscribe(
    data => {
      this.rolledPokemon = data;
      this.changeDetect.detectChanges();
      this.sprite = '';
      this.sprite = this.getFrontSprite(this.rolledPokemon[0].pokemonId);
      console.log(JSON.stringify(this.sprite));
      console.log(this.rolledPokemon);

    }
  )

}

// tslint:disable-next-line: typedef
public trackItem(index: number, item: OwnedPokemon) {
  return `${item.pokemonId}-${index}`;
}

getFrontSprite(id: number): string{
  console.log(`Name of RolledPokemon ID: ${id}`);
  // tslint:disable-next-line: max-line-length
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
}
}
