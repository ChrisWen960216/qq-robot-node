const signInSentence = {
  type: 'signIn',
  str: '',
};

function generateSignInSentence(context, data) {
  const { sender: { user_id: userId } } = context;
  console.log(data);
  if (!data) {
    signInSentence.str = `*** [CQ:at, qq=${userId}] 签到失败! ***
你今天已经签到过了!`;
  }
  if (data.matthewCandy) {
    const {
      candy, talent, avatarSrc, matthewCandy, todayCandy,
    } = data;
    signInSentence.str = `[CQ:image,file=${avatarSrc}]
*** [CQ:at, qq=${userId}] 签到成功! ***
你获得了[CQ:emoji,id=127809] * ${todayCandy}
由于你的天赋【马太福音】，你今日获得的糖果修正为 [CQ:emoji,id=127809] * ${matthewCandy}
你目前的人物状态:
资产: [CQ:emoji,id=127809] * ${candy},
天赋: ${talent || '暂无'}
`;
  } else {
    const {
      candy, talent, avatarSrc, todayCandy,
    } = data;
    signInSentence.str = `[CQ:image,file=${avatarSrc}]
*** [CQ:at, qq=${userId}] 签到成功! ***
你获得了[CQ:emoji,id=127809] * ${todayCandy}
你目前的人物状态:
资产: [CQ:emoji,id=127809] * ${candy},
天赋: ${talent || '暂无'}
`;
  }


  return signInSentence;
}


module.exports = { generateSignInSentence };
