function generateTalentStoreSentence(context, data) {
  const { talentStore } = data;
  const talentStoreSentence = {
    type: 'talentStore',
    str: talentStore.map(item => ({
      type: 'text',
      data: {
        text: `编号:${item.id}:${item.title} --- ${item.desc}
种类:${item.type},购买耗费:${item.cost},发动耗费:${item.details.startCost}
`,
      },
    })),
  };
  return talentStoreSentence;
}

module.exports = { generateTalentStoreSentence };
