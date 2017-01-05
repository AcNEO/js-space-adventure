function createShipFleet() {
  ships = game.add.physicsGroup();
  let shipFleet;

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      shipFleet = ships.create(game.rnd.between(100, 770), 0, 'ship', game.rnd.between(0, 35));

      if (i >= 20) {
        shipFleet.body.gravity.y = 200;
        shipFleet.body.velocity.x = game.rnd.between(-200, 200);
      } else if (i >= 50) {
        shipFleet.body.gravity.y = 250;
        shipFleet.body.velocity.x = game.rnd.between(-250, 250);
      } else if (i >= 75) {
        shipFleet.body.gravity.y = 300;
        shipFleet.body.velocity.x = game.rnd.between(-300, 300);
      } else {
        shipFleet.body.gravity.y = 150;
      }
    }, i * 1000);
  };

};


function createCoinGroup() {
  coins = game.add.physicsGroup();
  let coinGroup;

  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      coinGroup = coins.create(game.rnd.between(100, 770), 0, 'coin', game.rnd.between(0, 35));

      if (i >= 40) {
        coinGroup.body.gravity.y = 150;
        coinGroup.body.velocity.x = game.rnd.between(-100, 100);
      } else if (i >= 80) {
        coinGroup.body.gravity.y = 200;
        coinGroup.body.velocity.x = game.rnd.between(-200, 200);
      } else {
        coinGroup.body.gravity.y = 100;
      }
    }, i * 2000);
  };
};
