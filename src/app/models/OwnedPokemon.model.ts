
export class OwnedPokemon {

    pokemonId:number;
    species:string;
    nickname:string;
    OT:number;
    currentTrainer:number;
    typeOne:string;
    typeTwo:string;
    ability:string;
    level:number;
    status:string;
    maxHp:number;
    currentHp:number;
    atk:number;
    def:number;
    spAtk:number;
    spDef:number;
    spd:number;
    rarity:string;
    isFainted:boolean;
    inBattle:boolean;


    constructor(pokemonId:number,species:string, nickname:string, OT:number,currentTrainer:number,typeOne:string, typeTwo:string, ability:string,
        level:number, status:string, maxHp:number,  currentHp:number, atk:number, def:number, spAtk:number, spDef:number,  spd:number, rarity:string,isFainted:boolean,  inBattle:boolean)
        {
            this.pokemonId=pokemonId;
            this.species=species;
            this.nickname=nickname;
            this.OT=OT;
            this.currentTrainer=currentTrainer;
            this.typeOne=typeOne;
            this.typeTwo=typeTwo;
            this.ability=ability;
            this.level=level;
            this.status=status;
            this.maxHp=maxHp;
            this.currentHp=currentHp;
            this.atk=atk;
            this.def=def;
            this.spAtk=spAtk;
            this.spDef=spDef;
            this.spd =spd;
            this.rarity=rarity;
            this.isFainted=isFainted;
            this.inBattle=inBattle;
        }


}