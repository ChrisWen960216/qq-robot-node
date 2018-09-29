const rollUtils = require('../utils/roll');

function rollController() {
  const roll = rollUtils();
  return roll;
}

module.exports = rollController;
