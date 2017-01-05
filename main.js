var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

let cursors;
let score = 0;
let scoreText;
let ships;
let coins;
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

  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

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
  game.physics.arcade.overlap(player, ships, subtractLife, null, this);
  game.physics.arcade.overlap(player, coins, collectCoin, null, this);

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

function createShipFleet() {
  ships = game.add.physicsGroup();
  let shipFleet;

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      shipFleet = ships.create(game.rnd.between(100, 770), 0, 'ship', game.rnd.between(0, 35));

      if (i >= 20) {
        shipFleet.body.gravity.y = 200;
        shipFleet.body.velocity.x = game.rnd.between(-200, 200);
      } else if (i >= 50) {
        shipFleet.body.gravity.y = 250;
        shipFleet.body.velocity.x = game.rnd.between(-250, 250);
      } else if (i >= 75) {
        shipFleet.body.gravity.y = 300;
        shipFleet.body.velocity.x = game.rnd.between(-300, 300);
      } else {
        shipFleet.body.gravity.y = 150;
      }
    }, i * 1000);
  };

};

function createCoinGroup() {
  coins = game.add.physicsGroup();
  let coinGroup;

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      coinGroup = coins.create(game.rnd.between(100, 770), 0, 'coin', game.rnd.between(0, 35));

      if (i >= 40) {
        coinGroup.body.gravity.y = 150;
        coinGroup.body.velocity.x = game.rnd.between(-100, 100);
      } else if (i >= 80) {
        coinGroup.body.gravity.y = 200;
        coinGroup.body.velocity.x = game.rnd.between(-200, 200);
      } else {
        coinGroup.body.gravity.y = 100;
      }
    }, i * 2000);
  };
};

function beginGamePlay () {
  createShipFleet();
  createCoinGroup();
};

function collectCoin(player, coin) {
  // Removes coin from screen
  coin.kill();
  score += 100;
  scoreText.text = `score: ${score}`;

};

function subtractLife(player, ship) {
  // Removes ship from screen
  ship.kill();
  // Subtracts a heart according to how many are still on screen
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
