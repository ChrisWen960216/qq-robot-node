function generateSignInSentence(context, data) {
  const { avatarSrc } = data;
  const { sender: { user_id: userId } } = context;
  return `[CQ:at,qq=${userId}] 签到成功！[CQ:image,file=${avatarSrc}]`;
}

module.exports = { generateSignInSentence };
