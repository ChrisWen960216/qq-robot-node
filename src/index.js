const CQWebSocket = require('cq-websocket');
const { clientConfig, FORMAL_GROUP_NUMBER, TEST_GROUP_NUMBER } = require('../config.js');

const mainController = require('./controller/index.js');
const mainSentence = require('./sentences/index.js');
const Serendipity = require('./client/serendipity.js');

const { handleSeredipity } = require('./service/serendipity.js');

const bot = new CQWebSocket(clientConfig);

const TEST = true;

// 处理群消息
bot.on('message.group', (e, context) => {
  const resData = mainController(context);
  if (!resData) { return null; }
  const resSentence = mainSentence(context, resData);
  const { group_id: groupId } = context;
  return bot('send_group_msg', {
    group_id: TEST ? TEST_GROUP_NUMBER : groupId,
    message: resSentence.str,
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
    .catch(error => console.error(error));
}, 1000 * 30);


module.exports = bot;
