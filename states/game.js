'use strict';

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div');

game.state.add('start-menu', startMenu);
game.state.add('start-game', startGame);
game.state.add('credit-menu', creditMenu);

game.state.start('start-menu');
