function generateSerendipitySentence(context, data) {
  const { serendipity, name, time } = data;
  const sentence = `我们服的 ${serendipity} 于${time} 被 ${name} 偷走啦！`;
  return sentence;
}

module.exports = { generateSerendipitySentence };
