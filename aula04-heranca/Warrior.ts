import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Personagem {
    // Uma classe pode exterder apenas uma classe 
    private _strength: number;
    private _agility: number;

    constructor(name: string) {
        // O número de parametros recebidos pelo construtor da classe filha desse ser maior ou igual ao número de parametros da classe super
        super(name); // chamada da "super" deve ser feita na primeira linha do construtor 
        this._armor = Util.randomizer(1_000, 10_000);
        this._maxLife = Util.randomizer(500, 1_500);
        this._currentLife = Util.randomizer(500, this._maxLife);
        this._strength = Util.randomizer(100, 1_000);
        this._agility = Util.randomizer(100, 1_000);
        
    }
}