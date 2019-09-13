const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('ready!');

});

 

client.on('message', message => {

    if (message.content === '!ping') {

       message.reply('should I say pong?');
     
    if (message.content === '!whassaaaaaaaaap?';
        
       message.reply('WHASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP?'

       }

});


client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
