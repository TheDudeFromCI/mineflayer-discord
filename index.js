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
            client.channels.cache.get(id).then((channel) => {
                bot.discord.channel = channel;
                cb(true);
            }, (err) => cb(err))
        } catch (e) {
            cb(new Error(e));
            return false;
        };
    };
    bot.discord.chat = function(message, channelid, cb=function(){}) {
        try {
            if (channelid.toLowerCase()=="default" || channelid == undefined) {
                if (!bot.discord.channel) {
                    cb(new Error("No channel provided."));
                    return false;
                }
            }
            client.channels.cache.get(channelid).then((channel) => {
                channel.send(message);
                cb()
            }, (err) => cb(err))
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
