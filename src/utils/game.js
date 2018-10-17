function splitGameArgs(context) {
  const { message, sender: { user_id: sender } } = context;
  const gameArgList = message.split(' ');
  const commder = gameArgList[1];
  const targeter = gameArgList[2].split('qq=')[1].split(']')[0];
  const gameArgs = { sender, commder, targeter };
  return gameArgs;
}

module.exports = { splitGameArgs };
