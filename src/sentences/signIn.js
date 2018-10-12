const { signInLimit } = require('../utils/signIn.js');

function generateSignInSentence(context, data) {
  const { avatarSrc, candy } = data;
  const { sender: { user_id: userId } } = context;
  let signInSentence = '';
  if (signInLimit(userId)) {
    if (candy === 0) {
      signInSentence = `  [CQ:image,file=${avatarSrc}]
*** [CQ:at,qq=${userId}] 签到成功! ***
抱歉啦，我没有 [CQ:emoji,id=127809] 给你`;
    } else {
      signInSentence = `  [CQ:image,file=${avatarSrc}]
*** [CQ:at,qq=${userId}] 签到成功! ***
获得了[CQ:emoji,id=127809] * ${candy}`;
    }
  } else {
    signInSentence = `*** [CQ:at,qq=${userId}] 签到失败! ***
我的马鸭，你今天已经签到过了!
签没签到都不记得吗？
等我的暴躁老哥语言库开发完成我喷死你。
我劝你善良`;
  }
  return signInSentence;
}


module.exports = { generateSignInSentence };
