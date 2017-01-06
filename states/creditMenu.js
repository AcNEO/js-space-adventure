'use strict';

let creditMenu = {
  create: function() {
    game.stage.backgroundColor = '#CCC';

    // Determines if player is made a position on the leader board
    // Then display text accordingly
    determineHighScore();

    game.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  },

  update: function() {
    if (game.spaceBar.isDown) {
      game.state.start('start-game');
    };
  }

};
