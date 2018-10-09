/**
 * Created By ChristianWen
 *  2018/10/09
 *  signIn Controller
 */

function signInController(context) {
  const { sender: { user_id: userId } } = context;
  const avatarSrc = `https://q1.qlogo.cn/g?b=qq&nk=${userId}&s=100`;
  const signInLucky = '';
  return { type: 'signIn', data: { avatarSrc, signInLucky } };
}

module.exports = signInController;
