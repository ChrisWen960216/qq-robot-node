const generateRollSentence = require('./roll.js');

function mainSentence(context, dataConfig) {
  const { type, data } = dataConfig;
  switch (type) {
    case 'roll': return generateRollSentence(context, data);
    default: return null;
  }
}

module.exports = mainSentence;
