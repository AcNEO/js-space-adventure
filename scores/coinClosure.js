'use strict';

const scoreModule = (function() {
  let score = 0;

  return {
    // Increment score
    incScore: (val) => { score += val; },
    // Get score
    getScore: () => score,
    // Reset score
    resetScore: () => { score = 0; }
  };
})();
