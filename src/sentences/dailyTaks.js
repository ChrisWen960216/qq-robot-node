function generateDailyTasksSentence(context, data) {
  const { daily_list = [], daily_update_time: dailyUpdateTime = '' } = data;
  if (daily_list.length === 0 || !dailyUpdateTime) {
    return {
      type: 'dailyTask',
      str: '数据获取接口异常，无法提供数据',
    };
  }
  const tasks = daily_list.map((item, index) => ({ type: 'text', data: { text: `${item.title}${index === daily_list.length - 1 ? '' : '\n'}` } }));
  const dataStr = [
    {
      type: 'text',
      data: { text: `日期: ${dailyUpdateTime} \n` },
    },
    ...tasks,
  ];

  return { type: 'dailyTask', str: dataStr };
  // const dataStr =

  // return {
  //   type: 'dailyTask',
  //   str: dataStr,
  // };
}


module.exports = { generateDailyTasksSentence };
