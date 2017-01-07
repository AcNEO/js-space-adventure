'use strict';

function getAllUserScores() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `https://js-space-adventure.firebaseio.com/scores.json`
    })
    .then((scoreList) => {
      if (scoreList === null) {
        resolve([{name: 'dms', score: '0'}]);
      } else {
        let sortedList = [];
        // Sort through FB object and push each player score obj to and array
        Object.keys(scoreList).forEach(each => {
          sortedList.push(scoreList[each]);
        });
        // Sort the array of player score obj
        sortedList = sortedList.sort(function (a, b) {
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
