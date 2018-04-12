const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

client.on('ready', () => {
    console.log('I am ready!');
});

switch (command) {
  case "ping" :
    message.channel.send('Pong!');
    break;
  case "blah" :
    message.channel.send('Meh.');
    break;
}

// THIS  MUST  BE  THIS  WAY
client.login(config.token);
