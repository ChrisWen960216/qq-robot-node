const { handleTimeStr } = require('../utils/time.js');

function handleSeredipity(seredipity) {
  const { serendipity, name, time } = seredipity;
  const timeStr = handleTimeStr(time);
  const serendipityData = { serendipity, name, time: timeStr };
  return { type: 'serendipity', data: serendipityData };
}

module.exports = { handleSeredipity };
