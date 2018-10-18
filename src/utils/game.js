function msgCheck(msg) {
  const msgReg = new RegExp('CQ:at,qq=');
  return msgReg.test(msg);
}

function splitGameArgs(context) {
  const { message, sender: { user_id: sender } } = context;
  return new Promise((resolve, reject) => {
    const gameArgList = message.split(' ');
    const commder = gameArgList[1];
    if (!msgCheck(gameArgList[2])) {
      const error = new Error('获取不到目标');
      return reject(error);
    }
    const targeter = gameArgList[2].split('qq=')[1].split(']')[0];
    const gameArgs = { sender, commder, targeter };
    return resolve([null, gameArgs]);
  }).catch(error => [error, null]);
}

function gameErrNotice(context, bot) {
  const { sender: { user_id: userId }, group_id: groupId } = context;
  return bot('send_group_msg', {
    group_id: groupId,
    message: `[CQ:at, qq=${userId}] 指令错误`,
  });
}


module.exports = { splitGameArgs, gameErrNotice };
