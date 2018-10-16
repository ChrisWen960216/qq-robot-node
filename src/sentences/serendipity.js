function generateSerendipitySentence(context, data) {
  const { serendipity, name, time } = data;
  const resSentence = {
    type: 'serendipity',
    str: `我们服的 ${serendipity} 于${time} 被 ${name} 偷走啦！`,
  };
  return resSentence;
}

module.exports = { generateSerendipitySentence };
