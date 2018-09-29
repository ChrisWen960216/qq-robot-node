const rollUtils = require('../utils/roll');

function rollController(message) {
  const roll = rollUtils(message);
  return roll;
}

module.exports = rollController;
