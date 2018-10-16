const repeatStoreObj = {};

// const _repeatStore = {
//   // 控制机器人是否复读过
//   repeated: false,
//   // 复读的次数
//   times: 0,
//   // 复读的内容
//   content: '',
// };

function repeatController(context) {
  const { message, group_id: groupId = 0 } = context;

  // 初始化
  if (!repeatStoreObj[groupId]) {
    const repeatItem = {
      content: message,
      times: 1,
      repeated: false,
    };
    repeatStoreObj[groupId] = repeatItem;
    return null;
  }

  const { repeated, content, times } = repeatStoreObj[groupId];

  // 如果content没有内容，那么就将这次的话存入
  if (!content) {
    repeatStoreObj[groupId].content = message;
    repeatStoreObj[groupId].times += 1;
    return null;
  }


  // 如果复读被打断
  if (message !== content && times > 1) {
    repeatStoreObj[groupId].content = message;
    repeatStoreObj[groupId].times = 1;
    repeatStoreObj[groupId].repeated = false;
    return { type: 'judgement', data: times };
  }

  if (message !== content) {
    repeatStoreObj[groupId].content = message;
    repeatStoreObj[groupId].times = 1;
    repeatStoreObj[groupId].repeated = false;
    return null;
  }

  // 如果复读
  if (message === content) {
    repeatStoreObj[groupId].times += 1;
    if (repeated) { return null; }
    repeatStoreObj[groupId].repeated = true;
    return { type: 'repeat', data: content };
  }

  return null;
}

module.exports = repeatController;
