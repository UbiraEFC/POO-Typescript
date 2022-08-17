import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Priest extends Personagem {
    private _spirit: number;
    private _versatility: number;

    constructor(name: string) {
        super(name); 
        this._currentLife = 100;
        this._spirit = Util.randomizer(100, 1_000);
        this._versatility = Util.randomizer(100, 1_000);
        this._armor = Util.randomizer(100, 1_000);
        this._maxLife = Util.randomizer(20, 1_000);
        this._currentLife = Util.randomizer(20, this._maxLife);
    }
}