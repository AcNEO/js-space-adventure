var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

let cursors;
let ship;
let coin;

function preload() {
  game.stage.backgroundColor = '#CCC';

  game.load.image('js', 'sprite/js.png');
  game.load.image('ship', 'sprite/ship.png');
  game.load.image('coin', 'sprite/coin.png');
};

function create() {
  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(400, game.world.height - 10, 'js');

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  // Create random ship and coin sprites
  createShip();
  createCoin();

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
  ship.body.gravity.y = 200;
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

function collectCoin(player, coin) {
  // Removes coin from screen
  coin.kill();
};

function subtractLife(player, ship) {
  // Removes ship from screen
  ship.kill();
};
