const silenceController = require('./silence');
const { splitGameArgs } = require('../utils/game');


function gameController(context, bot) {
  const commandArgs = splitGameArgs(context);
  const { commder } = commandArgs;
  console.log('commder', commder);

  switch (commder) {
    case '沉默': return silenceController(commandArgs, context, bot);
    default: return null;
  }
}

module.exports = gameController;
