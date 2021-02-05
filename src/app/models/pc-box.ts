import { OwnedPokemon } from './OwnedPokemon.model';
import { Trainer } from './Trainer.model';
export class PcBox {

    boxId: number
    name: string
    owner: Trainer
    pokemon: OwnedPokemon[]

    constructor(boxId: number, name: string, owner: Trainer, pokemon: OwnedPokemon[]){
        this.boxId = boxId;
        this.name = name;
        this.owner = owner;
        this.pokemon = pokemon;
    }
}
