const generateCandy = require('../utils/candy');
const { getTodayTimeStr } = require('../utils/time');
const { updateUserById } = require('../lib/user');
const UserService = require('../service/user');

function signInController(context) {
  const { sender: { user_id: userId } } = context;
  const avatarSrc = `https://q1.qlogo.cn/g?b=qq&nk=${userId}&s=100`;
  const candy = generateCandy();

  return updateUserById(userId, { candy }).then(([error, userInfo]) => {
    if (error) { console.error(error); }
    const user = new UserService(userInfo);
    const signIn = user.getSignTime();
    const _userInfo = user.getUserInfo();
    const today = getTodayTimeStr();

    if (signIn === today) { return [null, null]; }
    _userInfo.avatarSrc = avatarSrc;
    return updateUserById(userId, { ..._userInfo, signIn: today });
  }).then(([$error, $userInfo]) => {
    if ($error) { console.error($error); }
    const _userInfo = $userInfo
      ? { ...new UserService($userInfo).getUserInfo(), avatarSrc, todayCandy: candy }
      : null;
    return { type: 'signIn', data: _userInfo };
  });
}

module.exports = signInController;
