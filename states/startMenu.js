'use strict';

let startMenu = {

  preload: function() {
    game.load.image('js', 'sprite/js.png');
    game.load.image('ship', 'sprite/ship.png');
    game.load.image('coin', 'sprite/coin.png');
    game.load.image('heart', 'sprite/heart.png');
    game.load.image('pine', 'sprite/pine-tree.png');
    game.load.image('dark-bg', 'sprite/dark-bg.png');
  },

  create: function() {
    let boImg = game.add.sprite(0,0, 'dark-bg');
    boImg.scale.setTo(2, 2);

    let text = game.add.text(225, 250, "Start Game",
    { font: "65px Arial", fill:'#FFF', align: "center" });

    game.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  },

  update: function() {
    if (game.spaceBar.isDown) {
      game.state.start('start-game');
    };
  }

};
