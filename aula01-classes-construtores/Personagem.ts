import prompt from "prompt-sync";
// Nome, Energia, Vida, Ataque, Defesa

class Personagem {
    nome: string = "";
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;

    constructor(nome: string) {
        this.vida = 100;
        this.nome = nome
    }
}

let sansa = new Personagem("Sansa Stark");
sansa.ataque = 5;
sansa.defesa = 10;
sansa.energia = 50;
sansa.vida = 10;
console.log(`${sansa.nome} = `, sansa);

let jon: Personagem = new Personagem("Jon Snow"); // (); construtor padrão
jon.vida = 300;
jon.ataque = 200;
jon.defesa = 150;
console.log(`${jon.nome} = `, jon);

class Vilao {
    // Ao definir o constructor dessa forma somos obrigados a passar os parametros dentro da criação do objeto 
    constructor(
        public name: string,
        public film: string,
        public power: number
    ) { }
}

let darth = new Vilao("Darth Vader", "Star Wars", 500);
console.log(`${darth.name} = `, darth);

let teclado = prompt();
let option = 0;
while (option != 9) {
    console.log('+========Personagem========+');
    console.log('|1. Treinar Ataque         |');
    console.log('|2. Treinar Defesa         |');
    console.log('|3. Imprimir Atributos     |');
    console.log('|9. Sair                   |');
    console.log('+==========================+');

    option = + teclado('Escolha uma ação: ');

    switch (option) {
        case 1:
            sansa.ataque += 2;
            break;
        case 2:
            sansa.defesa += 2;
            break;
        case 3:
            console.log(`${sansa.nome} = `, sansa);
            break;
        default:
            break;

    }
}
