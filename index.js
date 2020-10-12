const Discord = require('discord.js'); /*discord moment*/
const client = new Discord.Client(); /*make a discord client*/

async function init(bot, token, cb=function(){}) {
    bot.discord = bot.discord || {};
    try {
        await client.login(token);
        cb(true);
    } catch (e) {
        cb(new Error(e));
        return false;
    };
    bot.discord.setChannel = async function(id, cb=function(){}) {
        try {
            bot.discord.channel = await client.channels.cache.get(id);
            cb(true);
        } catch (e) {
            cb(new Error(e));
            return false;
        };
    };
    bot.discord.chat = function(message, channel, cb=function(){}) {
        try {
            var channel = await client.channels.cache.get(id);
            channel.send(message);
            cb(true);
        } catch (e) {
            cb(new Error(e));
            return false;
        };
    };
    client.on('message', (msg)=>{
        bot.emit('discord_message', msg.channel, msg.content, msg.author);
    });
};


module.exports = function (token) {
    if (!token || typeof token !== 'string')
    throw new Error("Discord token must be provided. Professionals have standards.")

  return function (bot) {
    init(bot, token)
  }
}
