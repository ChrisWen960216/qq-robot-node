/**
 * Created By ChrisWen
 *  2018/09/29
 *  QQBot 应答处理
 */
const rollController = require('./roll.js');

function mainController(context) {
  const { message } = context;
  switch (message) {
    case 'roll': return rollController();
    default: return null;
  }
}

module.exports = mainController;
