'use strict';

let shipCounter = 0;
let shipFleet;

function createShipFleet() {
  ships = game.add.physicsGroup();
  outputShips();
};

function timeoutShips() {
  createShipTOID = setTimeout(outputShips, determineShipOutputSpeed());
};

function determineShipOutputSpeed() {
  if (shipCounter >= 25) {
    return game.rnd.between(250, 500);
  } else if (shipCounter >= 100) {
    return game.rnd.between(0, 100);
  } else {
    return game.rnd.between(500, 1000);
  }
};

function outputShips() {
  shipCounter++;

  shipFleet = ships.create(game.rnd.between(100, 770), 0, 'ship', game.rnd.between(0, 35));

  if (shipCounter === 250) {
    game.state.start('credit-menu');
  } else if (shipCounter >= 25) {
    shipFleet.body.velocity.y = 500;
    shipFleet.body.velocity.x = game.rnd.between(-150, 150);
    timeoutShips();
  } else if (shipCounter >= 50) {
    shipFleet.body.velocity.y = 1000;
    shipFleet.body.velocity.x = game.rnd.between(-150, 150);
    timeoutShips();
  } else if (shipCounter >= 100) {
    shipFleet.body.velocity.y = 1500;
    shipFleet.body.velocity.x = game.rnd.between(-200, 200);
    timeoutShips();
  } else if (shipCounter >= 150) {
    shipFleet.body.velocity.y = 1750;
    shipFleet.body.velocity.x = game.rnd.between(-250, 250);
    timeoutShips();
  } else if (shipCounter >= 200) {
    shipFleet.body.velocity.y = 2000;
    shipFleet.body.velocity.x = game.rnd.between(-300, 300);
    timeoutShips();
  } else {
    shipFleet.body.velocity.y = 200;
    timeoutShips();
  };

};
