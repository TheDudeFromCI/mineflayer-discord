const Discord = require('discord.js'); /*discord moment*/
const client = new Discord.Client(); /*make a discord client*/

async function init(bot, token) {
    bot.discord = bot.discord || {};
    await client.login(token);
    bot.discord.setChannel = async function(id, cb=function(){}) {
        try {
            bot.discord.channel = await client.channels.cache.get(id);
            cb(true);
        } catch (e) {
            cb(new Error(e));
        };
    };
    bot.discord.chat = function(message, channel) {
        var channel = client.channels.cache.get(id);
        channel.send(message);
    };
    client.on('message', (msg)=>{
        bot.emit('discord_message', msg.channel, msg.content, msg.author);
    });
};
