const generateRollSentence = require('./roll.js');
const { generateSerendipitySentence } = require('./serendipity.js');
const { generateSignInSentence } = require('./signIn.js');
const { generateRepeatSentence, generateJudgementSentence } = require('./repeat');
const { generateTalentStoreSentence } = require('./talent');

function mainSentence(context, dataConfig) {
  const { type, data } = dataConfig;
  switch (type) {
    case 'roll': return generateRollSentence(context, data);
    case 'serendipity': return generateSerendipitySentence(context, data);
    case 'signIn': return generateSignInSentence(context, data);
    case 'repeat': return generateRepeatSentence(context, data);
    case 'judgement': return generateJudgementSentence(context, data);
    case 'talentStore': return generateTalentStoreSentence(context, data);
    default: return null;
  }
}

module.exports = mainSentence;
