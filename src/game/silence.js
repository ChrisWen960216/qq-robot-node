function silenceController(commandArgs, context, bot) {
  const { sender, commder, targeter } = commandArgs;
  const { groupId } = context;
  return bot('send_group_msg', {
    group_id: groupId,
    message: '技能发动暂未实装',
  });
}

module.exports = silenceController;
