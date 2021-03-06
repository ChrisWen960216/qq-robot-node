const silenceController = require('./silence');
const lockedController = require('./locked');
const { splitGameArgs, gameErrNotice } = require('../utils/game');


async function gameController(context, bot) {
  const [error, commandArgs] = await splitGameArgs(context);
  if (error || !commandArgs) { return gameErrNotice(context, bot); }
  const { commder } = commandArgs;

  switch (commder) {
    case '沉默': return silenceController(commandArgs, context, bot);
    case '锁定': return lockedController(commandArgs, context, bot);
    default: return null;
  }
}

module.exports = gameController;
