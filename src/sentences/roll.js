function commonPoints(context, roll) {
  const { sender: { user_id: userId } } = context;
  const resSentence = `[CQ:at, qq=${userId}] 摇出了 ${roll}点`;
  return resSentence;
}

function smallPoints(context, roll) {
  const { sender: { user_id: userId } } = context;
  const resSentence = `[CQ:at, qq=${userId}] 你就roll了 ${roll}点? 还想碰奇遇? 真是笑死本宝宝了`;
  return resSentence;
}

function largePoints(context, roll) {
  const { sender: { user_id: userId } } = context;
  const resSentence = `[CQ:at, qq=${userId}] 摇出了 ${roll}点, 彳亍口巴，我念某觉得你运气不错`;
  return resSentence;
}

function zeroPoint(context) {
  const { sender: { user_id: userId } } = context;
  const resSentence = `[CQ:at, qq=${userId}] 你居然Roll到了0点！我他妈想请问一下你，你是怎么roll到的？`;
  return resSentence;
}

function masterRoller(context) {
  const { sender: { user_id: userId } } = context;
  const resSentence = `[CQ:at, qq=${userId}] 你居然Roll到了100点！真是欧皇附体!`;
  return resSentence;
}

function generateRollSentence(context, roll) {
  if (roll === 0) {
    return zeroPoint(context);
  }
  if (roll < 30) {
    return smallPoints(context, roll);
  }
  if (roll > 90) {
    return largePoints(context, roll);
  }
  if (roll === 100) {
    return masterRoller(context);
  }
  return commonPoints(context, roll);
}


module.exports = generateRollSentence;
