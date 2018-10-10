/**
 * Created By ChristianWen
 *  2018/10/09
 *  signIn Controller
 */

const generateCandy = require('../utils/candy');

function signInController(context) {
  const { sender: { user_id: userId } } = context;
  const avatarSrc = `https://q1.qlogo.cn/g?b=qq&nk=${userId}&s=100`;
  const candy = generateCandy();
  return { type: 'signIn', data: { avatarSrc, candy } };
}

module.exports = signInController;
