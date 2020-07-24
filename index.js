const Telegraf = require('telegraf');
//Bot Object with my token.
const bot = new Telegraf('1313808778:AAGXdHfsYoQ2pNZ-2rwNfDVPuxTLOmxd5S0');
//What my bot will do when the user put the /start in the conversation
bot.start((ctx) =>{
  ctx.reply('Test');
});
//Initialize the bot.
bot.launch();
