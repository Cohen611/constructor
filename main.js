function Character(options) {
  var options = options || {};
  this.health = options.health || 500;
  this.name = options.name || "Pikachu";
  this.power = options.power || 50;
  this.misses = 0;
  this.attack = function (pokemon) {
    pokemon.damage(this);
  };
  this.damage = function (enemy) {
    var playerMessage = "";
    var random = Math.floor(Math.random() * 10 + 1);
    if(random >4) {
      if(this.health < 500) {
      playerMessage = "Sorry, "+ this.name +" you didn't catch em all.";
      }
      if(enemy.weapon) {
        this.health = this.health - (enemy.power * enemy.weapon.strength);
          playerMessage =  'You have defeated ' + enemy.weapon.name + ' you are now a Pokemon Master greater than Ash!';
      } else {
        this.health = this.health - enemy.power;
      }
  } else {
    enemy.misses = enemy.misses + 1;
    playerMessage =  "you're never going to be a trainer with that aim!";
  }
  return playerMessage;
  };
  this.equip = function (name, strength) {
    this.weapon = new Weapon({name: name, strength: strength});
  }
}

function Power(options) {
  var options = options || {};
  this.name = options.name || "Fire";
  this.strength = options.strength || "1";
}

//
// var charizard = new Character({health: 1000, name: "charizard", power:1000});
//
// var squirtle = new Character({health: 1000, name: "squirtle", power: 700});
//
// var meowth = new Character ({health: 1000, name: "meowth ", power: 600});
// var zubat = new Character ({health: 1000, name: "zubat ", power: 300});
// var ditto = new Character ({health: 1000, name: "ditto ", power: 500});
// var skitty = new Character ({health: 1000, name: "skitty ", power: 500});



// constructors is how classes are made in js.
function Person(options) {
  var options = options || {};
  this.name = options.name || "Ash";
  this.power = options.power || 50;
  this.greet = function (otherperson) {
    console.log(this.name + " says hello to " + otherperson);
  };
}
