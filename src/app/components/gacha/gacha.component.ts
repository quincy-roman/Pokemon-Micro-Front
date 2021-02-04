import { Trainer } from './../../models/Trainer.model';
import { LoginService } from './../../services/login.service';
import { GachaService } from './../../services/gacha.service';
import { OwnedPokemon } from './../../models/OwnedPokemon.model';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';

@Component({
  selector: 'app-gacha',
  templateUrl: './gacha.component.html',
  styleUrls: ['./gacha.component.css']
})
export class GachaComponent implements OnInit {
  static subscribeData: any;
  static apiData: any;
  public apiId: string;
  static pic: any;

  constructor(private gachaServ: GachaService, 
              private changeDetect: ChangeDetectorRef, 
              private http: HttpClient, 
              private loginServ:LoginService) { }

// tslint:disable-next-line: member-ordering
public rolledPokemon: OwnedPokemon[] = [];

// tslint:disable-next-line: member-ordering
public sprite: any;
public num: number;
public poke:number = 0;

static setSubscribeData(data):any{
  GachaComponent.subscribeData = data;
  return data;
}

static setAPIData(data):any{
  GachaComponent.apiData = data;
  return data;
}

static setURL(data):any{
  GachaComponent.pic = data;
  return data;
}

static getURL():string{
  return GachaComponent.pic;
}



  ngOnInit(): void {
    this.getTrainerPoke();
  }

roll()
{
  this.gachaServ.rollgacha(1).subscribe(
    data => {
      setTimeout(() => {
        GachaComponent.setSubscribeData(data);
        this.rolledPokemon = data;
        this.sprite = '';
        console.log('azhya...', GachaComponent.subscribeData[0].species);
         this.getFrontSprite(GachaComponent.subscribeData[0].species);
        console.log();
        console.log(this.rolledPokemon);
        this.changeDetect.detectChanges();
        this.getTrainerPoke();
      }, 5);

    }
  )

}

// tslint:disable-next-line: typedef
public trackItem(index: number, item: OwnedPokemon) {
  return `${item.pokemonId}-${index}`;
}

getFrontSprite(name: string){
  console.log(`Name of RolledPokemon ID: ${name}`);
  // tslint:disable-next-line: no-var-keyword
  this.gachaServ.getSprite(name).subscribe(
    d => {
      GachaComponent.setAPIData(d);
      console.log('this is little d here: ', d);

      this.changeDetect.detectChanges();
      this.num = GachaComponent.apiData.id;
      console.log('this is hello ' + this.num);
      console.log('2!! Pokemon id...' + GachaComponent.apiData.id);
      console.log(`New id is: ${GachaComponent.apiData.id}`);
      let url;
      url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.num}.svg`;
      console.log(url);
      this.sprite = url;
    }
  );
  // tslint:disable-next-line: max-line-length

}

getTrainerPoke()
{
  let t = new Trainer(0,"","","",0);
  this.loginServ.getTrainer().subscribe(
    data =>{
      t = data;
      this.poke = t.poke;
    }
  )
}



}
