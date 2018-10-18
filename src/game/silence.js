const { updateUserById, findUserById } = require('../lib/user');
const UserService = require('../service/user');


function silenceController(commandArgs, context, bot) {
  const { sender, targeter } = commandArgs;
  const { group_id: groupId } = context;

  return findUserById(sender)
    .then(([error, senderInfo]) => {
      if (error) { return [error, null]; }
      const _senderInfo = new UserService(senderInfo).getUserInfo();
      const { candy, talent: senderTalent } = _senderInfo;

      // 检查天赋
      if (senderTalent !== '最后遗言') {
        return bot('send_group_msg', {
          group_id: groupId,
          message: `[CQ:at, qq=${sender}] 沉默发动失败，你没有【最后遗言】的天赋`,
        });
      }

      // 检查耗费
      if (candy - 1 < 0) {
        return bot('send_group_msg', {
          group_id: groupId,
          message: `[CQ:at, qq=${sender}] 沉默发动失败，你没有足够的糖果来发动该技能`,
        });
      }

      // 如果都成功，检查目标天赋
      return findUserById(targeter).then(([_error, targeterInfo]) => {
        if (_error) { return [_error, null]; }

        // 如果目标也在玩签到游戏，那么就判定一下天赋
        if (targeterInfo) {
          const _targeterInfo = new UserService(targeterInfo).getUserInfo();
          const { talent: targetTalent } = _targeterInfo;

          // 检查目标天赋
          if (targetTalent === '缄默') {
            return bot('send_group_msg', {
              group_id: groupId,
              message: `[CQ:at, qq=${sender}] 沉默发动失败，你指定的目标拥有【缄默】天赋，不能被沉默`,
            });
          }
        }


        // 否则发动成功
        return updateUserById(sender, { candy: candy - 1 })
          .then(() => bot('send_group_msg', {
            group_id: groupId,
            message: `[CQ:at, qq=${sender}] 【最后遗言】发动成功，将目标禁言一分钟`,
          }))
          .then(() => bot('set_group_ban', {
            group_id: groupId,
            user_id: Number(targeter),
            duration: 60,
          }));
      });
    });
}

module.exports = silenceController;
