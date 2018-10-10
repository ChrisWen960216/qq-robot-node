const { signInLimit } = require('../utils/signIn.js');

function generateSignInSentence(context, data) {
  const { avatarSrc, candy } = data;
  const { sender: { user_id: userId } } = context;
  let signInSentence = '';
  if (signInLimit(userId)) {
    if (candy === 0) {
      signInSentence = `[CQ:image,file=${avatarSrc}]
      [CQ:at,qq=${userId}] 签到成功! 对不起，你今天没有糖果吃！`;
    } else {
      signInSentence = `[CQ:image,file=${avatarSrc}]
      [CQ:at,qq=${userId}] 签到成功! 获得了[CQ:face,id=147] * ${candy}`;
    }
  } else {
    signInSentence = `[CQ:at,qq=${userId}] 你今天已经签到过了!`;
  }
  return signInSentence;
}


module.exports = { generateSignInSentence };
