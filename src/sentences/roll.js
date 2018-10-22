const resSentence = {
  type: 'roll',
  str: '',
};

function commonPoints(context, roll) {
  const { sender: { user_id: userId } } = context;
  resSentence.str = `[CQ:at, qq=${userId}] 摇出了 ${roll}点`;
  return resSentence;
}

function smallPoints(context, roll) {
  const { sender: { user_id: userId } } = context;
  resSentence.str = `[CQ:at, qq=${userId}] 你就roll了 ${roll}点? 还想碰奇遇? 真是笑死本宝宝了`;
  return resSentence;
}

function largePoints(context, roll) {
  const { sender: { user_id: userId } } = context;
  resSentence.str = `[CQ:at, qq=${userId}] 摇出了 ${roll}点, 彳亍口巴，我念某觉得你运气不错`;
  return resSentence;
}

function zeroPoint(context) {
  const { sender: { user_id: userId } } = context;
  resSentence.str = `[CQ:at, qq=${userId}] 你居然Roll到了0点！我他妈想请问一下你，你是怎么roll到的？`;
  return resSentence;
}

function masterRoller(context) {
  const { sender: { user_id: userId } } = context;
  resSentence.str = `[CQ:at, qq=${userId}] 你居然Roll到了100点！真是欧皇附体!`;
  return resSentence;
}

function handleDestinyLeftHand(context, roll, details) {
  const { sender: { user_id: userId } } = context;
  const { data } = details;
  resSentence.str = `[CQ:at, qq=${userId}] 天赋【命运的左手】发动
三次命运骰的点数分别为 ${data[0]}, ${data[1]}, ${data[2]}, 你的roll点为 ${roll}`;
  return resSentence;
}

function generateConditionSentence(context, roll, details) {
  const { type } = details;
  switch (type) {
    case 'DESTINY_LEFT_HAND': return handleDestinyLeftHand(context, roll, details);
    default: return null;
  }
}

function generateRollSentence(context, roll, details) {
  const { type } = details;
  if (type) { return generateConditionSentence(context, roll, details); }
  if (roll === 0) { return zeroPoint(context); }
  if (roll < 30) { return smallPoints(context, roll); }
  if (roll > 90) { return largePoints(context, roll); }
  if (roll === 100) { return masterRoller(context); }
  return commonPoints(context, roll);
}


module.exports = generateRollSentence;
