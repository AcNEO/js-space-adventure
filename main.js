var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

let cursors;
let newSprite;

function preload() {
  game.stage.backgroundColor = '#CCC';

  game.load.image('js', 'sprite/js.png');
  game.load.image('ship', 'sprite/ship.png');
};

function create() {
  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  cursors = game.input.keyboard.createCursorKeys();

  player = game.add.sprite(32, game.world.height - 150, 'js');

  //  We need to enable physics on the player
  game.physics.arcade.enable(player);

  //  Player physics properties. Give the little guy a slight bounce.
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.collideWorldBounds = true;

  // Create random ship sprite
  createRandomSprite('ship');

};

function update() {
  //  Collide the player and the stars with the platforms
  var shipCollision = game.physics.arcade.collide(player, newSprite);

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

function createRandomSprite (spriteName) {
  newSprite;
  let randomXCoor = Math.floor(Math.random() * (750 - 50 + 1)) + 50;
  newSprite = game.add.sprite(randomXCoor, -10, spriteName);

  game.physics.arcade.enable(newSprite);

  newSprite.body.bounce.y = 0.2;
  newSprite.body.gravity.y = 300;
  newSprite.body.collideWorldBounds = false;

};
