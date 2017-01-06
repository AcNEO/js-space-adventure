'use strict';

let gameOverText;
let displayText;


function determineHighScore() {

  getAllUserScores()
  .then((scoreList) => {

    // If players score is greater than the lowest score
    // Add user to leaderboard and get scoreList again
    if (score > scoreList.slice(-1)[0].score) {
      // Create user object with name and score
      let userObj = {
        name: prompt('What is your name?'),
        score: score
      };
      // Post score obj to FB
      postCurrentUserScore(userObj)
      .then((status) => {
        // Retrieve new scoreList
        getAllUserScores()
        .then((scoreList) => {
          gameOverText = `Game over, player score: ${score}\n
          Press SPACE to play again.`;
          // Output leaderboard text
          displayText = game.add.text(225, 250, gameOverText, { font: "30px Arial", fill:'#000', align: "center" });
        });
      });
    } else {
      gameOverText = `Sorry! Game over, player score: ${score}\n
      Press SPACE to play again.`;

      // Output leaderboard text
      displayText = game.add.text(225, 250, gameOverText, { font: "30px Arial", fill:'#000', align: "center" });
    };
  });

};
