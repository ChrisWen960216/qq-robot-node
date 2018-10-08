const CQWebSocket = require('cq-websocket');
const clientConfig = require('./config.js');

const mainController = require('./src/controller/index.js');
const mainSentence = require('./src/sentences/index.js');


const bot = new CQWebSocket(clientConfig);

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

bot.connect();
