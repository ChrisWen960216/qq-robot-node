const generateRollSentence = require('./roll.js');
const { generateSerendipitySentence } = require('./serendipity.js');

function mainSentence(context, dataConfig) {
  const { type, data } = dataConfig;
  switch (type) {
    case 'roll': return generateRollSentence(context, data);
    case 'serendipity': return generateSerendipitySentence(context, data);
    default: return null;
  }
}

module.exports = mainSentence;
