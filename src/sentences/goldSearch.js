function generateGoldSearchSentence(context, data) {
  const dataStr = [];
  for (let i = 0; i < data.length; i += 1) {
    dataStr.push({
      type: 'text',
      data: {
        text: `金:${Number(data[i].gamemoneyamount).toFixed(2)}, 价格:${Number(data[i].unitprice).toFixed(2)} 元\n`,
      },
    });
  }
  dataStr.push({
    type: 'text',
    data: {
      text: '数据来源 ---5173',
    },
  });

  console.log(dataStr);

  return {
    type: 'goldSearch',
    str: dataStr,
  };
}

module.exports = { generateGoldSearchSentence };
