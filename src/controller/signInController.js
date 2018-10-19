const generateCandy = require('../utils/candy');
const { getTodayTimeStr } = require('../utils/time');
const { updateUserById } = require('../lib/user');
const { calMatthewCandy } = require('../game/matthew');
const UserService = require('../service/user');

async function signInController(context) {
  const { sender: { user_id: userId } } = context;
  const avatarSrc = `https://q1.qlogo.cn/g?b=qq&nk=${userId}&s=100`;
  let candy = generateCandy();

  const [error, oldUserInfo] = await updateUserById(userId);
  if (error) { console.log(error); return null; }

  const user = new UserService(oldUserInfo);
  const signIn = user.getSignTime();
  const userInfo = user.getUserInfo();
  const today = getTodayTimeStr();

  if (signIn === today) { return { type: 'signIn', data: null }; }
  const { candy: totalCandy, talent } = userInfo;
  if (talent === '马太福音') { userInfo.matthewCandy = calMatthewCandy(candy); }
  if (talent === '最后的财富') { candy = Math.max(candy, 1); }
  if (talent === '女神的馈赠') { candy = 4; }
  userInfo.avatarSrc = avatarSrc;

  const [_error, _userInfo] = await updateUserById(userId, {
    ...userInfo,
    signIn: today,
    candy: (userInfo.matthewCandy || candy) + totalCandy,
  });

  if (_error) { console.error(_error); return null; }
  const resUserInfo = _userInfo ? {
    ...new UserService(_userInfo).getUserInfo(),
    avatarSrc,
    todayCandy: candy,
    matthewCandy: userInfo.matthewCandy || null,
  } : null;
  return { type: 'signIn', data: resUserInfo };
}

module.exports = signInController;
