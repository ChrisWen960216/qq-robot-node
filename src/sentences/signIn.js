const signInSentence = {
  type: 'signIn',
  str: '',
};

function generateSignInSentence(context, data) {
  const { sender: { user_id: userId } } = context;
  if (!data) {
    signInSentence.str = `*** [CQ:at, qq=${userId}] 签到失败! ***
你今天已经签到过了!`;
  } else {
    const {
      candy, armor, talent, AC, DE, avatarSrc, todayCandy,
    } = data;
    signInSentence.str = `[CQ:image,file=${avatarSrc}]
*** [CQ:at, qq=${userId}] 签到成功! ***
你获得了[CQ:emoji,id=127809] * ${todayCandy}
你目前的人物状态:
资产: [CQ:emoji,id=127809] * ${candy},
天赋: ${talent || '暂无'}
盔甲: ${armor || '暂无'},
攻击: ${AC},
防御: ${DE}`;
  }

  return signInSentence;
}


module.exports = { generateSignInSentence };
