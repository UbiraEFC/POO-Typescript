import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Mage extends Personagem {
    private _intelligence: number;
    private _velocity: number;

    constructor(name: string) {
        super(name); 
        this._currentLife = 100;
        this._intelligence = Util.randomizer(100, 1_000);
        this._velocity = Util.randomizer(10, 2_000);
        this._armor = Util.randomizer(100, 1_000);
        this._maxLife = Util.randomizer(20, 1_000);
        this._currentLife = Util.randomizer(20, this._maxLife);
    }
}