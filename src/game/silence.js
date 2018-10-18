const { updateUserById, findUserById } = require('../lib/user');
const { checkQualication } = require('./blackTomb');
const UserService = require('../service/user');


/**
 * 检查发动者的资格
 * @param {Number} senderId
 * @return {[bool, Number, obj]} [result, reason, senderInfo]
 */
async function checkSenderQualication(senderId) {
  const [error, senderInfo] = await findUserById(senderId);
  if (error) { return [false, 999, null]; }
  if (!senderInfo) { return [false, 1, null]; }

  const _senderInfo = new UserService(senderInfo).getUserInfo();
  const { talent: senderTalent, candy } = _senderInfo;

  if (senderTalent !== '最后遗言') { return [false, 2, null]; }
  if (candy - 1 < 0) { return [false, 3, null]; }

  return [true, 0, senderInfo];
}

function handleSenderFailure(groupId, sender, reasonCode, bot) {
  switch (reasonCode) {
    case 1:
      return bot('send_group_msg', {
        group_id: groupId,
        message: `[CQ:at, qq=${sender}]，我在数据库中找不到你的资料`,
      });
    case 2:
      return bot('send_group_msg', {
        group_id: groupId,
        message: `[CQ:at, qq=${sender}]，技能发动失败，你的天赋不是【最后遗言】`,
      });
    case 3:
      return bot('send_group_msg', {
        group_id: groupId,
        message: `[CQ:at, qq=${sender}]，技能发动失败，你的糖果不足以发动【最后遗言】`,
      });
    default: return null;
  }
}

async function checkTargeterQualication(targeter) {
  const [error, targetInfo] = await findUserById(targeter);

  if (error) { return [true, 0]; }
  if (!targetInfo) { return [true, 0]; }

  const _targetInfo = new UserService(targetInfo).getUserInfo();
  const { talent: targetTalent } = _targetInfo;

  // 天赋是缄默，无法禁言
  if (targetTalent === '缄默') { return [false, 1]; }
  if (targetTalent === '黑鬼的坟墓') {
    const [_error, reflex] = await checkQualication(Number(targeter));
    console.log([_error, reflex]);
    if (_error) { return null; }
    if (reflex) { return [false, 999]; }
  }
  return [true, 0];
}

async function handleTargeterFailure(groupId, sender, targeterReasonCode, bot) {
  switch (targeterReasonCode) {
    case 1:
      return bot('send_group_msg', {
        group_id: groupId,
        message: `[CQ:at, qq=${sender}]，【最后遗言】发动失败，目标装备了天赋【缄默】`,
      });
    case 999:
      return bot('set_group_ban', {
        group_id: groupId,
        user_id: sender,
      })
        .then(() => bot('send_group_msg', {
          group_id: groupId,
          message: `[CQ:at, qq=${sender}]，【最后遗言】发动失败，目标装备了天赋【黑鬼的坟墓】且命运骰判定有效，本次禁言将被反射回你本身`,
        }));
    default: return null;
  }
}

async function handleSenderSuccess(groupId, sender, targeter, senderInfo, bot) {
  const { candy } = senderInfo;
  await updateUserById(sender, { candy: candy - 1 });
  return bot('send_group_msg', {
    group_id: groupId,
    message: `[CQ:at, qq=${sender}] 【最后遗言】发动成功，将目标禁言一分钟`,
  }).then(() => bot('set_group_ban', {
    group_id: groupId,
    user_id: Number(targeter),
    duration: 60,
  }));
}

async function silenceController(commandArgs, context, bot) {
  const { sender, targeter } = commandArgs;
  const { group_id: groupId } = context;

  const [checkSenderResult, senderReasonCode, senderInfo] = await checkSenderQualication(sender);

  // 如果发动资格检查不通过，则进入失败执行函数
  if (!checkSenderResult) {
    return handleSenderFailure(groupId, sender, senderReasonCode, bot);
  }

  const [checkTargeterResult, targeterReasonCode] = await checkTargeterQualication(targeter);

  // 如果目标资格检查不通过，则进入失败执行函数
  // 注意 当且仅当两个结果都为true才会进入成功回调
  if (!checkTargeterResult) {
    return handleTargeterFailure(groupId, sender, targeterReasonCode, bot);
  }

  return handleSenderSuccess(groupId, sender, targeter, senderInfo, bot);
}

module.exports = silenceController;
