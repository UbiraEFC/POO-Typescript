import { Mage } from "./src/Mage";
import { Personagem } from "./src/Personagem";
import { Priest } from "./src/Priest";

// Polimorfismo - todos pertencem a classe personagem, mas cada um tem sua ramificação de classe 
let mage: Personagem = new Mage('Magão');
let priest: Personagem = new Priest('Curadorzão');

const personagens: Personagem[] = [];
personagens.push(mage);
personagens.push(priest);

// Forma que teriamos de utilizar caso não tivessemos criado o metodo attack na classe Personagem
// personagens.forEach((p) => {
//     console.log(p.attack instanceof Mage ? p.attack() : (p as Priest).attack());
// });

// O polimorfismo sempre irá buscar a instancia mais atualizada 
personagens.forEach((p) => console.log(p.attack()));