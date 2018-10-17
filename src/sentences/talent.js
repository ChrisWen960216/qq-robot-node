function generateTalentStoreSentence(context, data) {
  const { talentStore } = data;
  const talentStoreSentence = {
    type: 'talentStore',
    str: talentStore.map(item => ({
      type: 'text',
      data: {
        text: `${item.id}: ${item.title}
${item.desc}
种类:${item.type},购买耗费:${item.cost},发动耗费:${item.details.startCost}
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
  const {
    candy, armor, talent, AC, DE,
  } = userInfo;
  return {
    type: 'buyingTalent',
    str: `*** [CQ:at, qq=${userId}] 天赋购买成功! ***
    你目前的人物状态:
    资产: [CQ:emoji,id=127809] * ${candy},
    天赋: ${talent || '暂无'}
    盔甲: ${armor || '暂无'},
    攻击: ${AC},
    防御: ${DE}`,
  };
}

module.exports = { generateTalentStoreSentence, generateBuyingTalentSentence };
