export default class Personagem {
    constructor(
        //  Ao definir o constructor dessa forma somos
        // obrigados a passar os parametros dentro da criação do objeto 
        public name: string,
        public energy: number,
        public life: number,
        public atack: number,
        public defense: number
    ) {}

// Toda vez que pensar em ler dados na classe - Use parametros
// Toda ves que pensar em imprimir na classe - Use retorno
    status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this.name +
            ("\nEnergia: " + this.energy.toFixed(1)) +
            ("\nAtaque: " + this.atack.toFixed(1)) +
            ("\nDefesa: " + this.defense.toFixed(1))
        );
    }

    treinarAtaque(): void {
        this.atack += Math.random() * 7;
        this.energy -= Math.random() * 10;
    }

    treinarDefesa(): void {
        this.defense += Math.random() * 5;
        this.energy -= Math.random() * 10;
    }

    rest(hour: number): void {
        this.energy += hour * (Math.random() * 10);
        if (this.energy > 100) {
            this.energy = 100;
        }
    }

    isDead(): number {
        if (this.energy < 0){
            return 9
        } else {
            return 1
        }
    }

    fight(): number {
        let desgaste: number = Math.random() * 100;
        this.energy -= desgaste;
        return desgaste; 
    }

}

