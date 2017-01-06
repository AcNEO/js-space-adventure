'use strict';

let coinGroup;
let coinCounter = 0;

function createCoinGroup() {
  coins = game.add.physicsGroup();
  outputCoins();
};

function timeoutCoins() {
  createShipFleet = setTimeout(outputCoins, game.rnd.between(1000, 4000));
};

function outputCoins() {
  coinCounter++;

  coinGroup = coins.create(game.rnd.between(100, 770), 0, 'coin', game.rnd.between(0, 35));

  if (coinCounter >= 20) {
    coinGroup.body.velocity.y = 150;
    coinGroup.body.velocity.x = game.rnd.between(-100, 100);
    timeoutCoins();
  } else if (coinCounter >= 40) {
    coinGroup.body.velocity.y = 200;
    coinGroup.body.velocity.x = game.rnd.between(-200, 200);
    timeoutCoins();
  } else {
    coinGroup.body.velocity.y = 100;
    timeoutCoins();
  };

};
