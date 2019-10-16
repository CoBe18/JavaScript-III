/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(gameObejectAttributes){
  this.createdAt = gameObejectAttributes.createdAt;
  this.dimensions = gameObejectAttributes.dimensions;
}
//methods for this ^ constructor 
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`; 
}


//Build next constructor 
function CharacterStats(characterStatsAttribute){
  this.hp = characterStatsAttribute.hp;
  this.name = characterStatsAttribute.name; 
  GameObject.call(this, characterStatsAttribute); 
}
// Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype); 

//methods for this ^ constructor 
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`; 
} 

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanoidAttributes){  
  this.faction = humanoidAttributes.faction; 
  this.weapons = humanoidAttributes.weapons; 
  this.language = humanoidAttributes.language; 
  CharacterStats.call(this,humanoidAttributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype); 
//Humanoid methods under here. 
//greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//^^ building above. 
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`; 
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Toungue',
});
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });


  

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.





  // Stretch task:
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.

class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
    this.heroDefend = function(attacker, weapon) {
      const strong = 10;
      const mild = 5;
      const weak = 2;
      let hit = '';
      for (let i = 0; i < this.weapons.length; i++) {
        if (this.weapons[i] === weapon && i === 0) {
          attacker.hp -= strong;
          hit = strong;
        } else if (this.weapons[i] === weapon && i === 1) {
          attacker.hp -= mild;
          hit = mild;
        } else if (this.weapons[i] === weapon && i === 2) {
          attacker.hp -= weak;
          hit = weak;
        }
      }
      console.log(`${attacker.name} struck by ${weapon}. Lost ${hit}  `);
      console.log(`${attacker.name}'s health is at ${attacker.hp}`);
      console.log('');

      if (attacker.hp <= 0) {
        console.log(`${attacker.name} has been defeated`);
      }
    };
  }
}

// function Hero(heroAttributes) {
//   Humanoid.call(this, heroAttributes);
//   this.heroDefend = function(attacker, weapon) {
//     const strong = 10;
//     const mild = 5;
//     const weak = 2;
//     let hit = '';
//     for (let i = 0; i < this.weapons.length; i++) {
//       if (this.weapons[i] === weapon && i === 0) {
//         attacker.hp -= strong;
//         hit = strong;
//       } else if (this.weapons[i] === weapon && i === 1) {
//         attacker.hp -= mild;
//         hit = mild;
//       } else if (this.weapons[i] === weapon && i === 2) {
//         attacker.hp -= weak;
//         hit = weak;
//       }
//     }
//     console.log(`${attacker.name} struck by ${weapon}. Lost ${hit}  `);
//     console.log(`${attacker.name}'s health is at ${attacker.hp}`);
//     console.log('');
//
//     if (attacker.hp <= 0) {
//       console.log(`${attacker.name} has been defeated`);
//     }
//   };
// }
//
// Hero.prototype = Object.create(Humanoid.prototype);

class Villian extends Humanoid {
  constructor(villianAttributes) {
    super(villianAttributes);
    this.villianAttack = function(defender, weapon) {
      const strong = 10;
      const mild = 5;
      const weak = 2;
      let hit = '';
      for (let i = 0; i < this.weapons.length; i++) {
        if (this.weapons[i] === weapon && i === 0) {
          defender.hp -= strong;
          hit = strong;
        } else if (this.weapons[i] === weapon && i === 1) {
          defender.hp -= mild;
          hit = mild;
        } else if (this.weapons[i] === weapon && i === 2) {
          defender.hp -= weak;
          hit = weak;
        }
      }
      console.log(`${defender.name} struck by ${weapon}. Lost ${hit}  `);
      console.log(`${defender.name}'s health is at ${defender.hp}`);
      console.log('');

      if (defender.hp <= 0) {
        console.log(`${defender.name} has been defeated`);
      }
    };
  }
}

// function Villian(villianAttributes) {
//   Humanoid.call(this, villianAttributes);
//   this.villianAttack = function(defender, weapon) {
//     const strong = 10;
//     const mild = 5;
//     const weak = 2;
//     let hit = '';
//     for (let i = 0; i < this.weapons.length; i++) {
//       if (this.weapons[i] === weapon && i === 0) {
//         defender.hp -= strong;
//         hit = strong;
//       } else if (this.weapons[i] === weapon && i === 1) {
//         defender.hp -= mild;
//         hit = mild;
//       } else if (this.weapons[i] === weapon && i === 2) {
//         defender.hp -= weak;
//         hit = weak;
//       }
//     }
//     console.log(`${defender.name} struck by ${weapon}. Lost ${hit}  `);
//     console.log(`${defender.name}'s health is at ${defender.hp}`);
//     console.log('');
//
//     if (defender.hp <= 0) {
//       console.log(`${defender.name} has been defeated`);
//     }
//   };
// }
//
// Villian.prototype = Object.create(Humanoid.prototype);
//
const lancelot = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 7,
    width: 7,
    height: 5,
  },
  hp: 100,
  name: 'Lancelot',
  faction: 'Round Table',
  weapons: ['Sword', 'Spear', 'Shield'],
  language: 'Common Toungue',
});

const blackKnight = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 9,
    width: 5,
    height: 7,
  },
  hp: 105,
  name: 'Black Knight',
  faction: 'Mystics of the night',
  weapons: ['Mace', 'Sword', 'Axe'],
  language: 'Unknown',
});

lancelot.heroDefend(blackKnight, 'Sword');
lancelot.heroDefend(blackKnight, 'Spear');
lancelot.heroDefend(blackKnight, 'Shield');

blackKnight.villianAttack(lancelot, 'Mace');
blackKnight.villianAttack(lancelot, 'Sword');
blackKnight.villianAttack(lancelot, 'Axe');


/* Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
/* Create two new objects, one a villian and one a hero and fight it out with methods!*/


blackKnight.villianAttack(lancelot, 'Sword');
blackKnight.villianAttack(lancelot, 'Mace');
lancelot.heroDefend(blackKnight, 'Shield');
lancelot.heroDefend(blackKnight, 'Shield');
lancelot.heroDefend(blackKnight, 'Sword');
blackKnight.villianAttack(lancelot, 'Mace');
blackKnight.villianAttack(lancelot, 'Axe');
lancelot.heroDefend(blackKnight, 'Sword');
blackKnight.villianAttack(lancelot, 'Axe');
blackKnight.villianAttack(lancelot, 'Sword');
lancelot.heroDefend(blackKnight, 'Sword');
lancelot.heroDefend(blackKnight, 'Sword');
lancelot.heroDefend(blackKnight, 'Sword');
blackKnight.villianAttack(lancelot, 'Axe');
blackKnight.villianAttack(lancelot, 'Mace');
lancelot.heroDefend(blackKnight, 'Shield');
blackKnight.villianAttack(lancelot, 'Sword');
blackKnight.villianAttack(lancelot, 'Axe');
lancelot.heroDefend(blackKnight, 'Spear');
lancelot.heroDefend(blackKnight, 'Spear');
lancelot.heroDefend(blackKnight, 'Spear');
blackKnight.villianAttack(lancelot, 'Mace');
blackKnight.villianAttack(lancelot, 'Sword');
lancelot.heroDefend(blackKnight, 'Spear');
lancelot.heroDefend(blackKnight, 'Spear');
lancelot.heroDefend(blackKnight, 'Sword');
blackKnight.villianAttack(lancelot, 'Mace');
blackKnight.villianAttack(lancelot, 'Axe');
lancelot.heroDefend(blackKnight, 'Sword');
blackKnight.villianAttack(lancelot, 'Axe');
blackKnight.villianAttack(lancelot, 'Sword');
lancelot.heroDefend(blackKnight, 'Sword');
lancelot.heroDefend(blackKnight, 'Sword');
lancelot.heroDefend(blackKnight, 'Sword');
blackKnight.villianAttack(lancelot, 'Axe');
blackKnight.villianAttack(lancelot, 'Mace');