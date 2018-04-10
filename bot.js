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
        message.channel.send('```Markdown Liste der Befehle ´´´');
        message.channel.send('```fix Basic Befehle: d!test´´´');
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
