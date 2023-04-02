const telegramBot = require('node-telegram-bot-api'); 
require('dotenv').config();

const TOKEN = process.env.TOKEN; 

const bot = new telegramBot(TOKEN, {polling:true});

bot.on('message',(message)=>{
    // console.log(message.text); 
    // console.log(message.from.id);
    let chatId = message.from.id; 
    bot.sendMessage(chatId, "Hello Nigga!!");

})