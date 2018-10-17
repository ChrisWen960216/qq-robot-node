const talentConfig = require('../game/talentConfig');

function checkTalentQualification(_userInfo, talentName) {
  const { candy } = _userInfo;
  const targetTalent = talentConfig.filter(item => item.title === talentName)[0];
  if (!targetTalent || targetTalent.length === 0) { return -1; }
  const { cost } = targetTalent;
  const result = candy - cost;
  return result;
}

module.exports = { checkTalentQualification };
