import { Mage } from "./Mage";
import { Personagem } from "./Personagem";
import { Priest } from "./Priest";
import { Warrior } from "./Warrior";

// Polimorfismo - todos pertencem a classe personagem, mas cada um tem sua ramificação de classe 
let mage: Personagem = new Mage('Magão');
let warrior: Personagem = new Warrior('Guerreirão');
let priest: Personagem = new Priest('Curadorzão');

console.log('O Mago é: ', mage);
console.log('O Guerreiro é: ', warrior);
console.log('O Curandeiro é: ', priest);