'use strict';

let gameOverText;
let displayText;


function determineHighScore() {

  getAllUserScores()
  .then((scoreList) => {

    // If players score is greater than the lowest score
    // Add user to leaderboard and get scoreList again
    if (scoreModule.getScore() > scoreList.slice(-1)[0].score) {
      // Create user object with name and score
      let userObj = {
        name: prompt('Congrats, you made the leaderboard!\nPlease enter you name.'),
        score: scoreModule.getScore()
      };
      // Post score obj to FB
      postCurrentUserScore(userObj)
      .then((status) => {
        // Retrieve new scoreList
        getAllUserScores()
        // Output leaderboard and gameover msg
        .then((scoreList) => createLeaderBoard(scoreList));
      });
    } else {
      // Output leaderboard and gameover msg
      createLeaderBoard(scoreList);
    };
  });

};


function createLeaderBoard(leaderBoardList) {

  gameOverText = `Your score: ${scoreModule.getScore()}`;
  // Output leaderboard text
  game.add.text(250, 100, gameOverText,
    { font: "40px Arial", fill:'#FFF', align: "center" });

  let leaderBoardString= `\nLEADER BOARD:\n_______________\n`;

  leaderBoardList.forEach((each, i) => {
    leaderBoardString += `${i + 1}. ${each.name}: ${each.score}\n`
  });

  game.add.text(275, 150, leaderBoardString,
    { font: "30px Arial", fill:'#0000ff', align: "left" });

  game.add.text(225, 500, `Press Space to Play Again`,
    { font: "30px Arial", fill:'#BBB', align: "center" });

};
