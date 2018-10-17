const { updateUserById } = require('../lib/user');
const UserService = require('../service/user');

function silenceController(commandArgs, context, bot) {
  const { sender, commder, targeter } = commandArgs;
  const { group_id: groupId } = context;

  return updateUserById(sender)
    .then(([error, userInfo]) => {
      console.log(error, userInfo);
      if (error) { return [error, null]; }
      const _userInfo = new UserService(userInfo).getUserInfo();
      const { candy, talent } = _userInfo;
      if (talent !== '最后遗言') {
        return bot('send_group_msg', {
          group_id: groupId,
          message: `[CQ:at, qq=${sender}] 沉默发动失败，你没有【最后遗言】的天赋`,
        });
      }
      return bot('send_group_msg', {
        group_id: groupId,
        message: `[CQ:at, qq=${sender}] 【最后遗言】发动成功，将目标禁言一分钟`,
      }).then(() => bot('set_group_ban', {
        group_id: groupId,
        user_id: Number(targeter),
        duration: 60,
      }));
    });
}

module.exports = silenceController;