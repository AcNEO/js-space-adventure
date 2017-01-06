'use strict';

function getAllUserScores() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://js-space-adventure.firebaseio.com/scores.json`
    })
    .then((scoreList) => {
      resolve(scoreList);
    })
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
