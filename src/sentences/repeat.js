
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
    str: `这次复读持续了${data}次,被[CQ:at, qq=${userId}]打断了。这次复读击败了大约 ${percent * 10}% 的鹦鹉。`,
  };
  return sentence;
}

module.exports = { generateJudgementSentence, generateRepeatSentence };
