function generateTalentStoreSentence(context, data) {
  const { talentStore } = data;
  const talentStoreSentence = {
    type: 'talentStore',
    str: talentStore.map(item => ({
      type: 'text',
      data: {
        text: `${item.id}: ${item.title} - ${item.type}
`,
      },
    })),
  };
  return talentStoreSentence;
}

function generateBuyingTalentSentence(context, data) {
  const { sender: { user_id: userId } } = context;
  const { userInfo } = data;
  if (!userInfo) { return { type: 'buyingTalent', str: '购买失败，不存在该项天赋或者你的资产不足！' }; }
  const { candy, talent } = userInfo;
  return {
    type: 'buyingTalent',
    str: `*** [CQ:at, qq=${userId}] 天赋购买成功! ***
    你目前的人物状态:
    资产: [CQ:emoji,id=127809] * ${candy},
    天赋: ${talent || '暂无'}`,
  };
}

module.exports = { generateTalentStoreSentence, generateBuyingTalentSentence };
