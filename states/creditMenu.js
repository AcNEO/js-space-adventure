'use strict';

let creditMenu = {
  create: function() {
    game.stage.backgroundColor = '#CCC';

    let gameOverText = determineHighScore();

    let text = game.add.text(225, 250, gameOverText, { font: "30px Arial", fill:'#000', align: "center" });
    text.inputEnabled = true;

    game.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  },

  update: function() {
    if (game.spaceBar.isDown) {
      game.state.start('start-game');
    };
  }

};
