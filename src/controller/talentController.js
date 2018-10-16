const talentConfig = require('../game/talentConfig');

const talentData = {
  type: 'talent',
  data: null,
};

function talentController(context) {
  const { message } = context;
  if (message.indexOf('商店') > -1) {
    talentData.type = 'talentStore';
    talentData.data = { talentStore: talentConfig };
  } else {
    return null;
  }
  return talentData;
}

module.exports = talentController;
