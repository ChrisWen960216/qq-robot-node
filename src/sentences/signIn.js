const { signInLimit } = require('../utils/signIn.js');

function generateSignInSentence(context, data) {
  const { avatarSrc } = data;
  const { sender: { user_id: userId } } = context;
  if (signInLimit(userId)) { return `[CQ:at,qq=${userId}] 签到成功！[CQ:image,file=${avatarSrc}]`; }
  return `[CQ:at,qq=${userId}] 你今天已经签到过了!`;
}

module.exports = { generateSignInSentence };
