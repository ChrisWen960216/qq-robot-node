const rollUtils = require('../utils/roll');
const { updateUserById } = require('../lib/user');
const UserService = require('../service/user');
const { reflexTalentCN } = require('../game/talentType');

/**
 * Created By ChristianWen
 * @param {Number} userId
 * @return {{talent:TALENT_TYPE,details: null}}
 */
async function talentCheck(userId) {
  const [error, userInfo] = await updateUserById(userId);
  if (error) { return null; }
  const { talent: talentCN } = new UserService(userInfo).getUserInfo();
  return { talent: reflexTalentCN(talentCN), details: null };
}

function commonRollHandler() {
  const roll = rollUtils();
  return { type: 'roll', data: roll, details: null };
}

function handleDeLeftHand() {
  const rollOne = rollUtils();
  const rollTwo = rollUtils();
  const rollThree = rollUtils();
  const roll = Math.max(rollOne, rollTwo, rollThree);
  const details = { type: 'DESTINY_LEFT_HAND', data: [rollOne, rollTwo, rollThree] };
  return { type: 'roll', data: roll, details };
}

function talentRollHandler(talent) {
  switch (talent) {
    case 'DESTINY_LEFT_HAND': return handleDeLeftHand();
    case 'LIGHT_ORIGIN': return { type: 'roll', data: null, details: { type: 'LIGHT_ORIGIN', data: [] } };
    default: return commonRollHandler();
  }
}


async function rollController(context) {
  const { sender: { user_id: userId } } = context;
  const talentDetail = await talentCheck(userId);
  const { talent } = talentDetail;
  if (!talent) { return commonRollHandler(); }
  return talentRollHandler(talent);
}


module.exports = rollController;
