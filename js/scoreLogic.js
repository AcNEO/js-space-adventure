function collectCoin(player, coin) {
  // Removes coin from screen
  coin.kill();
  score += 100;
  scoreText.text = `score: ${score}`;
};
