const CQWebSocket = require('cq-websocket');
const mainController = require('./src/controller/index.js');
const mainSentence = require('./src/sentences/index.js');

const bot = new CQWebSocket();


// listen on all types of messages and print them to the console
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

// when the connection is ready
// bot.on('ready', () => {
//   /**
//    * bot is also a callable instance, call it when you want to call the APIs provided by CQHTTP
//    * to know what methods and params you can use, read the following link.
//    * @see https://cqhttp.cc/docs/4.4/#/API?id=api-%E5%88%97%E8%A1%A8
//    */
//   bot('send_private_msg', {
//     user_id: '957638221',
//     message: 'Hello',
//   });
// });

bot.connect();
