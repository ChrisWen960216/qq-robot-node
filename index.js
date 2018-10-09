const CQWebSocket = require('cq-websocket');
const { clientConfig, FORMAL_GROUP_NUMBER, TEST_GROUP_NUMBER } = require('./config.js');

const mainController = require('./src/controller/index.js');
const mainSentence = require('./src/sentences/index.js');
const Serendipity = require('./src/client/serendipity.js');

const { handleSeredipity } = require('./src/service/serendipity.js');

// const TEST_GROUP_NUMBER = 869911196;

const bot = new CQWebSocket(clientConfig);
bot.connect();


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
      user_id: userId.toString(),
      message: resMsg,
    }));
});

bot.on('message.group', (e, context) => {
  const resData = mainController(context);
  if (!resData) { return null; }
  const resStr = mainSentence(context, resData);
  const { group_id: groupId } = context;
  return bot('send_group_msg', {
    group_id: groupId,
    message: resStr,
  });
});

setInterval(() => {
  Serendipity.fetchSerendipityList()
    .then((data) => {
      if (!data) { return null; }
      const resData = handleSeredipity(data);
      const resStr = mainSentence(null, resData);
      console.log(resStr);
      return bot('send_group_msg', {
        group_id: FORMAL_GROUP_NUMBER,
        message: resStr,
      });
    })
    .catch(error => console.log(error));
}, 1000 * 30);
