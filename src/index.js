const CQWebSocket = require('cq-websocket');
const { clientConfig, FORMAL_GROUP_NUMBER, TEST_GROUP_NUMBER } = require('../config.js');

const mainController = require('./controller/index.js');
const mainSentence = require('./sentences/index.js');
const Serendipity = require('./client/serendipity.js');

const { handleSeredipity } = require('./service/serendipity.js');

const bot = new CQWebSocket(clientConfig);

const TEST = false;


// 处理私聊消息
bot.on('message.private', (e, context) => {
  const { user_id: userId } = context.sender;
  return Promise
    .resolve(mainController(context))
    .then((resData) => {
      if (resData) { return mainSentence(context, resData); }
      return null;
    })
    .then(resMsg => bot('send_private_msg', {
      user_id: TEST ? '957638221' : userId.toString(),
      message: resMsg,
    }));
});

// 处理群消息
bot.on('message.group', (e, context) => {
  const resData = mainController(context);
  if (!resData) { return null; }
  const resStr = mainSentence(context, resData);
  const { group_id: groupId, sender: { user_id: userId } } = context;
  if (resStr.type) {
    return bot('send_group_msg', {
      group_id: TEST ? TEST_GROUP_NUMBER : groupId,
      message: resStr.str,
    }).then(() => bot('set_group_ban', {
      group_id: TEST ? TEST_GROUP_NUMBER : groupId,
      user_id: userId,
      duration: 30,
    }));
  }

  return bot('send_group_msg', {
    group_id: TEST ? TEST_GROUP_NUMBER : groupId,
    message: resStr,
  });
});

// 奇遇上报部分
setInterval(() => {
  Serendipity.fetchList()
    .then(dataList => Serendipity.analyze(dataList))
    .then((data) => {
      if (!data) { return null; }
      const resData = handleSeredipity(data);
      const resStr = mainSentence(null, resData);
      return bot('send_group_msg', {
        group_id: TEST ? TEST_GROUP_NUMBER : FORMAL_GROUP_NUMBER,
        message: resStr,
      });
    })
    .catch(error => console.log(error));
}, 1000 * 30);


module.exports = bot;
