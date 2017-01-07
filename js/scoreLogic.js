function collectCoin(player, coin) {
  // Removes coin from screen
  coin.kill();
  if (shipCounter >= 100) {
    scoreModule.incScore(100);
  } else if (shipCounter >= 250) {
    scoreModule.incScore(200);
  } else {
    scoreModule.incScore(50);
  }
  scoreText.text = `score: ${scoreModule.getScore()}`;
};
