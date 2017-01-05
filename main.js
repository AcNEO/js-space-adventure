var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

let cursors;
let ship;
let coin;
let heart1;
let heart2;
let heart3;

function preload() {
  game.stage.backgroundColor = '#CCC';

  game.load.image('js', 'sprite/js.png');
  game.load.image('ship', 'sprite/ship.png');
  game.load.image('coin', 'sprite/coin.png');
  game.load.image('heart', 'sprite/heart.png');
};

function create() {
  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(400, game.world.height - 10, 'js');

  // Create initial hearts at beginning of game
  heart1 = game.add.sprite(700, 10, 'heart');
  heart2 = game.add.sprite(725, 10, 'heart');
  heart3 = game.add.sprite(750, 10, 'heart');

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  // Start ship and coin rendering
  beginGamePlay();

};

function update() {
  //  Collide the player and the stars with the platforms
  // var shipCollision = game.physics.arcade.collide(player, ship);

  // Create overlap functionality
  game.physics.arcade.overlap(player, ship, subtractLife, null, this);
  game.physics.arcade.overlap(player, coin, collectCoin, null, this);

  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;

  if (cursors.left.isDown) {
      //  Move to the left
    player.body.velocity.x = -150;
  } else if (cursors.right.isDown) {
      //  Move to the right
      player.body.velocity.x = 150;
  } else {
      //  Stand still
      player.animations.stop();
  };

};

function createShip() {
  let randomXCoor = Math.floor(Math.random() * (750 - 50 + 1)) + 50;
  ship = game.add.sprite(randomXCoor, - 10, 'ship');

  game.physics.arcade.enable(ship);

  ship.body.bounce.y = 0.2;
  ship.body.gravity.y = 100;
  ship.body.collideWorldBounds = false;
};

function createCoin() {
  let randomXCoor = Math.floor(Math.random() * (750 - 50 + 1)) + 50;
  coin = game.add.sprite(randomXCoor, - 10, 'coin');

  game.physics.arcade.enable(coin);

  coin.body.bounce.y = 0.2;
  coin.body.gravity.y = 200;
  coin.body.collideWorldBounds = false;
};

function beginGamePlay () {
    // Create random ship and coin sprites
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      createShip();
      createCoin();
    }, i * 200);
  };
};

function collectCoin(player, coin) {
  // Removes coin from screen
  coin.kill();
};

function subtractLife(player, ship) {
  // Removes ship from screen
  ship.kill();
  if (heart1 != null) {
    heart1.kill();
    heart1 = null;
  } else if (heart2 != null) {
    heart2.kill();
    heart2 = null;
  } else {
    heart3.kill();
    heart3 = null;
  };
};
