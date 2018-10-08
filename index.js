const CQWebSocket = require('cq-websocket');
const { clientConfig, FORMAL_GROUP_NUMBER } = require('./config.js');

const mainController = require('./src/controller/index.js');
const mainSentence = require('./src/sentences/index.js');
const Serendipity = require('./src/client/serendipity.js');

const { handleSeredipity } = require('./src/service/serendipity.js');

// const TEST_GROUP_NUMBER = 869911196;

const bot = new CQWebSocket(clientConfig);
bot.connect();
bot.on('message.private', (e, context) => {
  const resData = mainController(context);
  if (!resData) { return null; }
  const resStr = mainSentence(context, resData);
  const { user_id: userId } = context.sender;
  return bot('send_private_msg', {
    user_id: userId.toString(),
    message: resStr,
  });
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

setTimeout(() => {
  new Serendipity().fetchSerendipityList()
    .then((data) => {
      if (!data) { return null; }
      const resData = handleSeredipity(data);
      const resStr = mainSentence(null, resData);
      return bot('send_group_msg', {
        group_id: FORMAL_GROUP_NUMBER,
        message: resStr,
      });
    })
    .catch(error => console.log(error));
}, 5000);

// bot.on('')
