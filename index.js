
//Require the libs
const Telegraf = require('telegraf');
const dialogflow = require('./dialogflow');

//Only dev
const config = require('./config.json');

//Bot Object with my token.
const bot = new Telegraf(config.token);

//Introduction
bot.start((ctx) => {ctx.reply(`Olá ${ctx.from.first_name}${ctx.from.last_name}, tudo bem?`)});

//Today's date
const data = new Date();
bot.hears('2', (ctx) =>{
  ctx.reply(`Hoje é ${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} às ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} 📅`);
})

//Sticker
bot.on(['sticker'], (ctx) =>{ ctx.reply('Hahaha que massa 😆')});

//What my bot will do when the user put a message in the conversation
bot.on('message', async function (ctx) {
  const chatId = ctx.message.chat.id;
  const dfResponse = await dialogflow.sendMessage(chatId.toString(), ctx.message.text);
  console.log(ctx.message);
  ctx.reply(dfResponse.text);

});


//Initialize the bot.
bot.launch();
