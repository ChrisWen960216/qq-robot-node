const talentConfig = require('../game/talentConfig');
const { updateUserById } = require('../lib/user');
const UserService = require('../service/user');
const { checkTalentQualification } = require('../utils/talent');

const talentData = {
  type: 'talent',
  data: null,
};

function buyTalentController(context) {
  const talentName = context.message.split(' ')[1] || null;
  if (!talentName) { return null; }

  const { sender: { user_id: userId } } = context;
  return updateUserById(userId).then(([error, userInfo]) => {
    if (error) { return [error, null]; }
    const _userInfo = new UserService(userInfo).getUserInfo();
    const latestCandy = checkTalentQualification(_userInfo, talentName);
    if (latestCandy < 0) { return [null, null]; }
    const newUserInfo = { ..._userInfo, candy: latestCandy, talent: talentName };
    return updateUserById(userId, newUserInfo);
  }).then(([error, userInfo]) => {
    if (error) { return null; }
    return { type: 'buyingTalent', data: { userInfo } };
  });
}

function talentController(context) {
  const { message } = context;
  if (message.indexOf('商店') > -1) {
    talentData.type = 'talentStore';
    talentData.data = { talentStore: talentConfig };
  }
  if (message.indexOf('购买天赋') > -1) { return buyTalentController(context); }
  return talentData;
}


module.exports = talentController;
