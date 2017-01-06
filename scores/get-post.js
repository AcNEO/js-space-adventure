'use strict';

function getAllUserScores() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://js-space-adventure.firebaseio.com/scores.json`
    })
    .then((scoreList) => {
      if (scoreList === null) {
        resolve(true);
      } else {
        let sortedList = scoreList.sort(function (a, b) {
          return b.score - a.score;
        }).slice(0,5);

        resolve(sortedList);
      };

    });
  });
};


function postCurrentUserScore(playerObj) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://js-space-adventure.firebaseio.com/scores.json`,
      type: 'POST',
      data: JSON.stringify(playerObj)
    })
    .then((response) => {
      resolve(response);
    })
  });
};
