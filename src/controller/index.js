/**
 * Created By ChrisWen
 *  2018/09/29
 *  QQBot 应答处理
 */
const rollController = require('./roll.js');
const signInController = require('./signInController');
const talentController = require('./talentController');
const repeatController = require('./repeat');

function mainController(context) {
  const { message } = context;
  if (message === 'roll') {
    return rollController(message);
  }
  if (message === '签到') {
    return signInController(context);
  }
  if (message.indexOf('天赋') > -1) {
    return talentController(context);
  }
  return repeatController(context);
}

module.exports = mainController;
