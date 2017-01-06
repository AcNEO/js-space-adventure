'use strict';

function subtractLife(player, ship) {
  // Removes ship from screen
  ship.kill();
  // Subtracts a heart according to how many are still on screen
  if (heart1 != null) {
    heart1.kill();
    heart1 = null;
  } else if (heart2 != null) {
    heart2.kill();
    heart2 = null;
  } else {
    heart3.kill();
    heart3 = null;
    clearTimeout(createShipTOID);
    clearTimeout(createCoinTOID);
    game.state.start('credit-menu');
  };
};
