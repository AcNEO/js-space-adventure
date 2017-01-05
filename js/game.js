var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div');

// game.state.add('start-menu', startMenu);
game.state.add('start-game', startGame);
// game.state.add('credits', creditMenu);

game.state.start('start-game');
