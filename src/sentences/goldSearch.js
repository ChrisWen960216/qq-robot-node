function generateGoldSearchSentence(context, data) {
  const dataStr = [];
  dataStr.push({ type: 'text', data: { text: '剑三电八 绝代天骄金价\n' } });
  for (let i = 0; i < data.length; i += 1) {
    dataStr.push({
      type: 'text',
      data: {
        text: `金:${Number(data[i].gamemoneyamount).toFixed(2)}, 价格:${Number(data[i].unitprice).toFixed(2)} 元\n`,
      },
    });
  }
  dataStr.push({ type: 'text', data: { text: '---数据来源 5173' } });

  return {
    type: 'goldSearch',
    str: dataStr,
  };
}

module.exports = { generateGoldSearchSentence };
