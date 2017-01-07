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
    return game.rnd.between(500, 750);
  } else if (shipCounter >= 100) {
    return game.rnd.between(100, 500);
  } else if (shipCounter >= 300) {
    return 0;
  } else {
    return game.rnd.between(750, 1000);
  }
};

function outputShips() {
  shipCounter++;

  shipFleet = ships.create(game.rnd.between(100, 770), 0, 'ship', game.rnd.between(0, 35));

  if (shipCounter === 500) {
    game.state.start('credit-menu');
  } else if (shipCounter >= 25 && shipCounter < 50) {
    shipFleet.body.velocity.y = 400;
    shipFleet.body.velocity.x = game.rnd.between(-50, 50);
    console.log("> 25");
    timeoutShips();
  } else if (shipCounter >= 50 && shipCounter < 100) {
    shipFleet.body.velocity.y = 500;
    shipFleet.body.velocity.x = game.rnd.between(-100, 100);
    console.log("> 50");
    timeoutShips();
  } else if (shipCounter >= 100 && shipCounter < 150) {
    shipFleet.body.velocity.y = 600;
    shipFleet.body.velocity.x = game.rnd.between(-150, 150);
    console.log("> 100");
    timeoutShips();
  } else if (shipCounter >= 150 && shipCounter < 200) {
    shipFleet.body.velocity.y = 700;
    shipFleet.body.velocity.x = game.rnd.between(-200, 200);
    console.log("> 150");
    timeoutShips();
  } else if (shipCounter >= 200 && shipCounter < 250) {
    shipFleet.body.velocity.y = 800;
    shipFleet.body.velocity.x = game.rnd.between(-250, 250);
    console.log("> 200");
    timeoutShips();
  } else if (shipCounter >= 250 && shipCounter < 300) {
    shipFleet.body.velocity.y = 900;
    shipFleet.body.velocity.x = game.rnd.between(-250, 250);
    console.log("> 250");
    timeoutShips();
  } else if (shipCounter >= 300) {
    shipFleet.body.velocity.y = 1000;
    shipFleet.body.velocity.x = game.rnd.between(-300, 300);
    console.log("> 300");
    timeoutShips();
  } else {
    shipFleet.body.velocity.y = 300;
    console.log("< 25");
    timeoutShips();
  };

};
