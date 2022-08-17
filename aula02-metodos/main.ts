import prompt from "prompt-sync";
import Personagem from "./Personagem";

let teclado = prompt();
let option: number = 0;

let person: Personagem = new Personagem(
    "Sansa Stark",
    100,
    40,
    20,
    20
);

while (option != 9) {

    if(person.isDead() === 9){
        break;
    }

    console.log('+======== Personagem ========+');
    console.log('|1. Treinar Ataque           |');
    console.log('|2. Treinar Defesa           |');
    console.log('|3. Descansar                |');
    console.log('|4. Entrar em batalha        |');
    console.log('|8. Imprimir Atributos       |');
    console.log('|9. Sair                     |');
    console.log('+============================+');

    option = +teclado('Escolha uma ação: ');
    console.log('                            ');

    switch (option) {
        case 1:
            person.treinarAtaque();
            console.log(person.status());
            break;

        case 2:
            person.treinarDefesa();
            console.log(person.status());
            break;

        case 3:
            let horas: number = +teclado("Digite o número de horas: ");
            person.rest(horas);
            console.log(person.status());
            break;

        case 4:
            let rest: number = person.fight();
            console.log(`Esta custou ${rest.toFixed(1)} de energia!`);
            console.log(person.status());

            break;

        case 8:
            console.log(person.status());
            break;

        default:
            break;

    }
}

console.log("You Are Dead!")
