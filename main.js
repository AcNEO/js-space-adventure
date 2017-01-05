var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('js', 'sprite/js.png');
  // game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
};

function create() {
  game.add.sprite(0,0, 'js');
};

function update() {
};