'use strict'

const hercules = {
    name: 'Hercules',
    health : 150,
    attackPower : 15,
    attacks : ['Swift Slash', 'Vicious Thrust', 'Hilt Bash', 'Leaping Slam']
}
const nemeanLion = {
    name: 'Nemean Lion',
    health : 135,
    attackPower : 15,
    attacks : ['Piercing Claws', 'Armored Pounce', 'Vicious Chomp']
}
const lernaeanHydra = {
    name: 'Lernaean Hydra',
    health : 60,
    attackPower : 30,
    attacks : ['Serpentine Strike', 'Poisonous Fumes', 'Venomous Bite', 'Tail Whip', 'Constriction']
}

playGame(hercules, nemeanLion, lernaeanHydra);

function playGame(user, enemy1, enemy2) {
    alert('Welcome! In this game you play as Hercules on his quest to slay the Lernaean Hydra.');
    alert('story');
    attack(user, enemy1);
    alert('story');
    attack(user, enemy2);
    alert('story');
}
function promptAttack() {
    let attack = prompt('Type 1, 2, 3, or 4 to attack: 1. Swift Slash, 2. Vicious Thrust, 3. Hilt Bash, 4. Leaping Slam');
    return attack;
}
function returnAttackName(array, attack) {
    for (let i = 0; i < array.length; i++) {
        if (attack == array.indexOf(array[i])) {
            return array[i];
        }
    }
}
function returnEnemyAttackName(array) {
    let attack = Math.floor(Math.random() * Math.floor(array.length));
    return array[attack];
}
function attack(user, enemy) {
    let health = user.health;
    let attackPower = user.attackPower;
    let enemyHealth = enemy.health;
    let enemyAttackPower = enemy.attackPower;
    while (health > 0 && enemyHealth > 0){
        let attack = promptAttack();
        let attackName = returnAttackName(user.attacks, attack);
        let enemyAttackName = returnEnemyAttackName(enemy.attacks);
        enemyHealth -= attackPower;
        console.log(`You have dealt ${attackPower} damage to the ${enemy.name} with ${attackName}. It now has ${enemyHealth} health.`);
        health -= enemyAttackPower;
        console.log(`${enemy.name} has dealt ${enemyAttackPower} damage to you with ${enemyAttackName}. You now have ${health} health.`);
    }
    if (health > 0) {
        alert('Enemy Slain!');
    } else {
        alert('You have died, try again!');
        attack(user, enemy);
    }
}


