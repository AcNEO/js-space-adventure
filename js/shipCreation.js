'use strict';

let shipCounter = 0;
let shipFleet;

function createShipFleet() {
  ships = game.add.physicsGroup();
  outputShips();
};
function timeoutShips() {
  createShipFleet = setTimeout(outputShips, game.rnd.between(1000, 2000));
};

function outputShips() {
  shipCounter++;

  shipFleet = ships.create(game.rnd.between(100, 770), 0, 'ship', game.rnd.between(0, 35));

  if (shipCounter === 100) {
    game.state.start('credit-menu');
  } else if (shipCounter >= 20) {
    shipFleet.body.gravity.y = 200;
    shipFleet.body.velocity.x = game.rnd.between(-200, 200);
    timeoutShips();
  } else if (shipCounter >= 50) {
    shipFleet.body.gravity.y = 250;
    shipFleet.body.velocity.x = game.rnd.between(-250, 250);
    timeoutShips();
  } else if (shipCounter >= 75) {
    shipFleet.body.gravity.y = 300;
    shipFleet.body.velocity.x = game.rnd.between(-300, 300);
    timeoutShips();
  } else {
    shipFleet.body.gravity.y = 150;
    timeoutShips();
  };

};
