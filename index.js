const TelegramBot = require('node-telegram-bot-api')

const Token = '1018912697:AAGZaVDYbSN7IE3JCyewUmZKPnUJTD9CXVc'

const bot = new TelegramBot(Token, {polling:true})

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, `Hello from ${msg.from.first_name}`)
})
