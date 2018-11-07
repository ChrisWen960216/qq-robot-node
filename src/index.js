const CQWebSocket = require('cq-websocket');
const { clientConfig, FORMAL_GROUP_NUMBER, TEST_GROUP_NUMBER } = require('../config.js');

const mainController = require('./controller/index.js');
const mainSentence = require('./sentences/index.js');
const Serendipity = require('./client/serendipity.js');
const gameController = require('./game/index');

const { handleSeredipity } = require('./service/serendipity.js');

const bot = new CQWebSocket(clientConfig);

const TEST = false;

// 处理群消息
bot.on('message.group', async (e, context) => {
  const { group_id: groupId } = context;
  const resData = await mainController(context);
  if (!resData) { return null; }
  const resSentence = await mainSentence(context, resData);
  return bot('send_group_msg', {
    group_id: TEST ? TEST_GROUP_NUMBER : groupId,
    message: resSentence.str,
  });
});

bot.on('message.group.@.me', async (e, context) => {
  e.stopPropagation();
  return gameController(context, bot);
});

// 奇遇上报部分
setInterval(() => {
  Serendipity.fetchList()
    .then(dataList => Serendipity.analyze(dataList))
    .then((data) => {
      console.log(`当前时间${Date.now()}, 奇遇汇报 ${data}`);
      if (!data) { return null; }
      const resData = handleSeredipity(data);
      const resStr = mainSentence(null, resData);
      return bot('send_group_msg', {
        group_id: TEST ? TEST_GROUP_NUMBER : FORMAL_GROUP_NUMBER,
        message: resStr.str,
      });
    })
    .catch(error => console.error(error));
}, 1000 * 10);


module.exports = bot;
