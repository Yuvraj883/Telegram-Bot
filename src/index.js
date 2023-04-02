const telegramBot = require('node-telegram-bot-api'); 
require('dotenv').config();

// const TOKEN = process.env.TOKEN;
const TOKEN = '6101609484:AAEn1Jd1i4AkNwvS1hU06kRK2P9cRs0l84g'; 

const bot = new telegramBot(TOKEN, {polling:true});

bot.on('message',(message)=>{
    // console.log(message.text); 
    // console.log(message.from.id);
    let chatId = message.from.id; 
    bot.sendMessage(chatId, "Hello Nigga!!");

})