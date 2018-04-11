const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'd!test') {
    	message.reply('Gibt es leider nicht');
  	}
});

client.on('message', message => {
    if (message.content === 'd!help') {
        message.channel.send(' ```~~Liste der Befehle~~ ``` ');
        message.channel.send(' ``` Befehle müssen mit einem d! anfangen.``` ');
        message.channel.send(' ``` 1. Basics - help``` ');
        message.channel.send(' ``` 2. Platzhalter ``` ');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
