var pokemon = {
init:function(){
  pokemon.styling();
  pokemon.events();
},
styling: function(){

},
Config:{
  charizard: {
    name: "charizard",
    health: 1000,
    power: 1000
  },
  squirtle: {
    name: "squirtle",
    health: 1000,
    power: 700
  },
  meowth: {
    name: "meowth",
    health: 1000,
    power: 600
  },
  zubat: {
    name: "zubat",
    health: 1000,
    power: 300
  },
  ditto: {
    name: "ditto",
    health: 1000,
    power: 500
  },
  skitty: {
    name: "skitty",
    health: 1000,
    power: 500
  }
},
assignPlayer: function (choice) {
  console.log(choice);
  return new Character(pokemon.Config[choice]);
},
player1: null,
player2: null,
events: function(){
  $('.player1').on('change', function(event) {
      event.preventDefault();
        console.log("I've been clicked");
      var character = $(this).val();
      pokemon.player1 = pokemon.assignPlayer(character);
      // ash.addToPage('player1',options,'body');
      console.log("here's your pokemon", pokemon.player1);

  });


  $('.player2').on('change', function(event) {
      event.preventDefault();
        console.log("I've been clicked");
      var character = $(this).val();
      pokemon.player2 = pokemon.assignPlayer(character);
      // ash.addToPage('player1',options,'body');
      console.log("here's your pokemon", pokemon.player2);

  });
$('.attack').on('click',pokemon.pokemonBattle);


},
pokemonBattle: function (event) {
  event.preventDefault();
  pokemon.player1.attack(pokemon.player2);
  pokemon.player2.attack(pokemon.player1);
  console.log('player 1 health: ', pokemon.player1.health);
  console.log('player 2 health: ', pokemon. player2.health);
  console.log(pokemon.player1);
  var player1Health = pokemon.player1.health;
  var player2Health = pokemon.player2.health;
  var player1Message= "";
  var player2Message= "";
  if(player1Health < 500 && player1Health > 0) {
    player1Message= "Sorry you didn't catch em all.";
  }
  if(player1Health === 0) {
    player1Message= "You have defeated you're enemy ,you are now a Pokemon Master greater than Ash!";
  }
  if (pokemon.player1.misses > 0){
    player1Message= "Sorry you've missed";
  }
  if(player2Health < 500 && player1Health > 0) {
    player1Message= "Sorry you didn't catch em all.";
  }
  if(player2Health === 0) {
    player1Message= "You have defeated you're enemy, you are now a Pokemon Master greater than Ash!";
  }
  if (pokemon.player2.misses > 0){
    player2Message= "Sorry you've missed";
  }
  $(".player1Health").html(pokemon.player1.health + " " + player1Message);
  $(".player2Health").html(pokemon.player2.health);
},
  };

  $(document).ready(function () {
    pokemon.init();
  })
