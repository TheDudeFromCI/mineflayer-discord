Docs or something because my code is too messy

# Starting
Here is an example to get you started (assuming u have all packages installed and already have index.js downloaded in the same directory as your project.):

```js
const mineflayer-discord = require('./index.js')("your discord token")
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  username: "yes",
  host: "localhost"
})

bot.loadPlugin(mineflayer-discord)
```

### Functions

#### bot.discord.setChannel(channelid, \[callback])
Sets the default channel to be used by bot.discord.chat function.
the callback will get called when it sets the channel successfully, or if there's an error.

#### bot.discord.chat(message, \[channelid], \[callback])
This will attempt to send a message to the specified channel (or the default channel)

### Events

#### bot.on('discord_message',  channel, message, author)
Event fired when a discord message is recieved. Channel is the channel the message was sent in, message is the contents of the message, and author is the author of the message (a user object)

### Idk what to name this

#### bot.discord.channel
The channel object to be used as the default channel in bot.discord.chat function.


