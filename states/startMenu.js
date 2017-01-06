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

    let startText = `
    *** HOW TO PLAY ***\n
    Use left and right arrow keys to move\n
    Collect coins for points\n
    Avoid the ships, they hurt!
    `;

    game.add.text(220, 150, 'JS-Space Adventure\n',
    { font: "35px Arial", fill:'#FF6347', align: "center" });

    game.add.text(200, 200, 'Press Space to Start Game\n',
    { font: "30px Arial", fill:'#0000ff', align: "center" });

    game.add.text(200, 250, startText,
    { font: "20px Arial", fill:'#FFF', align: "center" });

    game.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  },

  update: function() {
    if (game.spaceBar.isDown) {
      game.state.start('start-game');
    };
  }

};
