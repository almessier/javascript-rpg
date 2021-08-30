'use strict'

const hercules = {
    name : 'Hercules',
    health : 150,
    attackPower : 15,
    attacks : ['Swift Slash', 'Vicious Thrust', 'Hilt Bash', 'Leaping Slam']
}
const nemeanLion = {
    name : 'Nemean Lion',
    health : 135,
    attackPower : 15,
    attacks : ['Piercing Claws', 'Armored Pounce', 'Vicious Chomp']
}
const lernaeanHydra = {
    name : 'Lernaean Hydra',
    health : 60,
    attackPower : 30,
    attacks : ['Serpentine Strike', 'Poisonous Fumes', 'Venomous Bite', 'Tail Whip', 'Constriction']
}
const hades = {
    name: 'Hades',
    health : 90,
    attackPower : 20,
    attacks : ['Titanic Slam', 'Bident Thrust']
}

playGame(hercules, nemeanLion, lernaeanHydra, hades);

function playGame(user, enemy1, enemy2, enemy3) {
    alert('Welcome! In this game you play as Hercules. You are tasked by King Eurystheus to slay the impossible nine-headed Lernaean Hydra and capture the guard dog of the underworld, Cerberus.');
    alert('Before you go to slay the Hydra, you hear of a vicious lion in Nemea. You have stalked it, and trapped it in a cave. Now it is time to fight it!');
    attack(user, enemy1);
    alert('With the Nemean Lion slayed, you set out to slay the Lernaean Hydra. You cover your face to protect from it\s poisonous fumes and run into battle!');
    attack(user, enemy2);
    alert('With the Hydra defeated, you have one final task. You must capture Hades\' dog, Cerberus, from the underworld. Hades won\'t let him go without a fight though!');
    attack(user, enemy3);
    alert('After being defeated, Hades allows you to take Cerberus. King Eurystheus is satisfied with your labors. You have won!');
}
function promptAttack() {
    let attackSelection = prompt('Type 1, 2, 3, or 4 to attack: 1. Swift Slash, 2. Vicious Thrust, 3. Hilt Bash, 4. Leaping Slam');
    attackSelection = parseInt(attackSelection, 10);
    return attackSelection;
}
function returnAttackName(array, attack) {
    for (let i = 0; i < array.length; i++) {
        if (attack - 1 == array.indexOf(array[i])) {
            return array[i];
        }
    }
}
function returnEnemyAttackName(array) {
    let enemyAttackSelection = Math.floor(Math.random() * Math.floor(array.length));
    return array[enemyAttackSelection];
}
function attack(user, enemy) {
    let health = user.health;
    let attackPower = user.attackPower;
    let enemyHealth = enemy.health;
    let enemyAttackPower = enemy.attackPower;
    while (health > 0 && enemyHealth > 0){
        let attack = promptAttack();
        if (attack > 0 && attack < 5){
            let attackName = returnAttackName(user.attacks, attack);
            let enemyAttackName = returnEnemyAttackName(enemy.attacks);
            enemyHealth -= attackPower;
            console.log(`You have dealt ${attackPower} damage to the ${enemy.name} with ${attackName}. It now has ${enemyHealth} health.`);
            health -= enemyAttackPower;
            console.log(`${enemy.name} has dealt ${enemyAttackPower} damage to you with ${enemyAttackName}. You now have ${health} health.`);
        } else {
            alert('Invalid input, try again.');
        }
    }
    if (health > 0) {
        alert('Enemy Defeated!');
    } else {
        alert('You have died, try again!');
        attack(user, enemy);
    }
}


