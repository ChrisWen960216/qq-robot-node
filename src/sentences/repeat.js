
function generateRepeatSentence(context, data) {
  const sentence = {
    type: 'repeat',
    str: data,
  };
  return sentence;
}

function generateJudgementSentence(context, data) {
  const { sender: { user_id: userId } } = context;
  const percent = Math.min(10, data);
  const sentence = {
    type: 'judge',
    str: `复读结束了，这次复读持续了${data}次, 击败了${percent * 10}%的鹦鹉。作为打断复读的奖励，送给[CQ:at, qq=${userId}]1分钟禁言套餐。`,
  };
  return sentence;
}

module.exports = { generateJudgementSentence, generateRepeatSentence };
