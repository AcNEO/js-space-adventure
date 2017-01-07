'use strict';

let creditMenu = {
  create: function() {
    let boImg = game.add.sprite(0,0, 'dark-bg');
    boImg.scale.setTo(2, 2);

    // Determines if player is made a position on the leader board
    // Then display text accordingly
    determineHighScore();

    // Activate spacebar
    game.spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  },

  update: function() {
    if (game.spaceBar.isDown) {
      // Reset score and counters
      scoreModule.resetScore();
      coinCounter = 0;
      shipCounter = 0;

      game.state.start('start-menu');
    };
  }

};
