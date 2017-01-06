'use strict';

function determineHighScore() {

  let userObj = {
    name: prompt('What is your name?'),
    score: score
  };

  getAllUserScores()
  .then((scoreList) => {

    if (score > scoreList.slice(-1)[0].score) {
      postCurrentUserScore(userObj)
      .then((status) => {
        getAllUserScores()
        .then((scoreList) => {
          return `Game over, player score: ${score}\n
          Press SPACE to play again.`
        });
      });
    } else {
      return `Sorry! Game over, player score: ${score}\n
      Press SPACE to play again.`
    };
  });

};
