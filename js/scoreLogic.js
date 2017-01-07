function collectCoin(player, coin) {
  // Removes coin from screen
  coin.kill();
  if (shipCounter >= 100) {
    score += 100;
  } else if (shipCounter >= 250) {
    score += 200;
  } else {
    score += 50;
  }
  scoreText.text = `score: ${score}`;
};
