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
  console.log('message.group', context);
  const resData = await mainController(context);
  const { group_id: groupId } = context;
  if (!resData) { return null; }
  const resSentence = await mainSentence(context, resData);
  return bot('send_group_msg', {
    group_id: TEST ? TEST_GROUP_NUMBER : groupId,
    message: resSentence.str,
  });
});

bot.on('message.group.@.me', async (e, context) => {
  e.stopPropagation();
  gameController(context, bot);
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
