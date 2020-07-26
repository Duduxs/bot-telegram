//Require the libs
const Telegraf = require('telegraf');
const dialogflow = require('./dialogflow');

//Only dev
const config = require('./config.json');

//Bot Object with my token.
const bot = new Telegraf(config.token);



//What my bot will do when the user put a message in the conversation
bot.on('message', async function (ctx) {
  const chatId = ctx.message.chat.id;

  const dfResponse = await dialogflow.sendMessage(chatId.toString(), ctx.message.text);

  ctx.reply(dfResponse.text);
});

//Initialize the bot.
bot.launch();
