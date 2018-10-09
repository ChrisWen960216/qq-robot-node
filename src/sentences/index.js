const generateRollSentence = require('./roll.js');
const { generateSerendipitySentence } = require('./serendipity.js');
const { generateSignInSentence } = require('./signIn.js');

function mainSentence(context, dataConfig) {
  const { type, data } = dataConfig;
  switch (type) {
    case 'roll': return generateRollSentence(context, data);
    case 'serendipity': return generateSerendipitySentence(context, data);
    case 'signIn': return generateSignInSentence(context, data);
    default: return null;
  }
}

module.exports = mainSentence;
