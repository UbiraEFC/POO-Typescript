import { Util } from "./Util";

export class Personagem {
    // protected - permite que quem herda visualize os artibutos geradores  
    protected _name: string;
    protected _armor: number;
    protected _maxLife: number;
    protected _currentLife: number;

    constructor (name: string) {
        // caso queiramos que nossa classe não receba mais extenções podemos definir o construtor como privado, assim não permitindo ser extendido
        this._name = name;
        this._armor = Util.randomizer(100, 1_000);
        this._maxLife = Util.randomizer(100, 1_000);
        this._currentLife = Util.randomizer(40, this._maxLife);
    }
}