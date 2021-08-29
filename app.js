'use strict'

const hercules = {
    health : 100,
    attackPower : 25,
    attacks : ['Swift Slash', 'Vicious Thrust', 'Hilt Bash', 'Leaping Slam']
}
const lernaeanHydra = {
    health : 100,
    attackPower : 25,
    attacks : ['Serpentine Strike', 'Poisonous Fumes', 'Venomous Bite', 'Tail Whip', 'Constriction']
}


playGame();
function playGame() {
    alert('Welcome! In this game you play as Hercules on his quest to slay the Lernaean Hydra.');
    alert('story')
    selectAttack();
}


function selectAttack(array) {
    let attack = prompt('Type 1, 2, 3, or 4 to attack: 1. Swift Slash, 2. Vicious Thrust, 3. Hilt Bash, 4. Leaping Slam');
    for (let i = 0; i < array.length; i++) {
        attack = array[i];
    }
}
