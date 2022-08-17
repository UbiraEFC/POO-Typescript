export default class Personagem {
    constructor(
        //  Ao definir o constructor dessa forma somos
        // obrigados a passar os parametros dentro da criação do objeto 
        private _name: string,
        private _energy: number,
        private _life: number,
        private _atack: number,
        private _defense: number
    ) {}

// Toda vez que pensar em ler dados na classe - Use parametros
// Toda ves que pensar em imprimir na classe - Use retorno
    
    public get name(): string {
        return this._name;
    }
 
    public set name(name : string) {
        this._name = name;
    }
    

    public status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this._name +
            ("\nEnergia: " + this._energy.toFixed(1)) +
            ("\nAtaque: " + this._atack.toFixed(1)) +
            ("\nDefesa: " + this._defense.toFixed(1))
        );
    }

    public treinarAtaque(): void {
        this._atack += this.randomizar(5);
        this._energy -= this.randomizar(10);
    }

    public treinarDefesa(): void {
        this._defense += this.randomizar(5);
        this._energy -= this.randomizar(10);
    }

    public rest(hour: number): void {
        this._energy += hour * (this.randomizar(10));
        if (this._energy > 100) {
            this._energy = 100;
        }
    }

    public isDead(): number {
        if (this._energy < 0){
            return 9
        } else {
            return 1
        }
    }

    public fight(): number {
        let desgaste: number = this.randomizar(100);
        this._energy -= desgaste;
        return desgaste; 
    }

    private randomizar(weitght: number): number {
        return Math.random() * weitght;
    }
}

