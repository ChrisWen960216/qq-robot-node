
function generateRepeatSentence(context, data) {
  const sentence = data;
  return sentence;
}

function generateJudgementSentence(context, data) {
  const { sender: { user_id: userId } } = context;
  const percent = Math.min(10, data);
  const sentence = `复读结束了，这次复读持续了${data}次，被[CQ:at, qq=${userId}]打断了, 在这次复读中，击败了${percent * 10}%的鹦鹉`;
  return sentence;
}

module.exports = { generateJudgementSentence, generateRepeatSentence };
