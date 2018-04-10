const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hilfe') {
    	message.reply('Gibt es leider nicht');
  	}
});

client.on('message', message => {
    if (message.content === 'd!help') {
        message.channel.send('Hier ist eine Liste der Befehle');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
