const { findUserById } = require('../lib/user');
const UserService = require('../service/user');

function checkProbability(limit = 8) {
  const randomValue = Math.random() * 10;
  const result = randomValue > limit;
  return result;
}

function checkQualication(userId) {
  return findUserById({ id: userId }).then(([error, userInfo]) => {
    if (error) { return [error, null]; }
    if (!userInfo) { return [null, false]; }

    const { talent } = new UserService(userInfo).getUserInfo();

    if (talent !== '黑鬼的坟墓') { return [null, false]; }
    const result = checkProbability();
    return [null, result];
  });
}


module.exports = { checkQualication };
