import { OwnedPokemon } from './OwnedPokemon.model';
import { Trainer } from './Trainer.model';

export class Team {

    teamId : number;
    trainer : Trainer;
    pokemon : OwnedPokemon[];
}
