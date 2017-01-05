'use strict';

let player;
let cursors;
let score = 0;
let scoreText;
let ships;
let coins;
let heart1;
let heart2;
let heart3;
let createShipTOID;
let createCoinTOID;

// Start game module
let startGame = {

  preload: function() {
    game.stage.backgroundColor = '#CCC';

    game.load.image('js', 'sprite/js.png');
    game.load.image('ship', 'sprite/ship.png');
    game.load.image('coin', 'sprite/coin.png');
    game.load.image('heart', 'sprite/heart.png');
  },

  create: function() {
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

  },

  update: function() {
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

  }

};

function beginGamePlay () {
  createShipFleet();
  createCoinGroup();
};
