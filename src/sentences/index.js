const generateRollSentence = require('./roll.js');
const { generateSerendipitySentence } = require('./serendipity.js');
const { generateSignInSentence } = require('./signIn.js');
const { generateRepeatSentence } = require('./repeat');
const { generateTalentStoreSentence, generateBuyingTalentSentence } = require('./talent');
const { generateGoldSearchSentence } = require('./goldSearch');

function mainSentence(context, dataConfig) {
  const { type, data, details = {} } = dataConfig;
  switch (type) {
    case 'roll': return generateRollSentence(context, data, details);
    case 'serendipity': return generateSerendipitySentence(context, data);
    case 'signIn': return generateSignInSentence(context, data);
    case 'repeat': return generateRepeatSentence(context, data);
    // case 'judgement': return generateJudgementSentence(context, data);
    case 'talentStore': return generateTalentStoreSentence(context, data);
    case 'buyingTalent': return generateBuyingTalentSentence(context, data);
    case 'goldSearch': return generateGoldSearchSentence(context, data);
    default: return null;
  }
}

module.exports = mainSentence;
