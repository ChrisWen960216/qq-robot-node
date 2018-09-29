function commonPoints(context, roll) {
  const user = context.sender.nickname;
  const resSentence = `${user} 摇出了 ${roll}点`;
  return resSentence;
}

function smallPoints(context, roll) {
  const user = context.sender.nickname;
  const resSentence = `${user} 你就roll了 ${roll}点? 还想碰奇遇? 真是笑死本宝宝了`;
  return resSentence;
}

function largePoints(context, roll) {
  const user = context.sender.nickname;
  const resSentence = `${user} 摇出了 ${roll}点, 彳亍口巴，我念某觉得你运气不错`;
  return resSentence;
}

function generateRollSentence(context, roll) {
  if (roll < 30) {
    return smallPoints(context, roll);
  }
  if (roll > 90) {
    return largePoints(context, roll);
  }
  return commonPoints(context, roll);
}


module.exports = generateRollSentence;
