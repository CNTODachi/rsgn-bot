require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const Member = '643002643110952962';
const dserv = '647540203082219550';

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

//Code that is running on RSGN server live
client.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content.includes ('@mod.gov.uk')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('656194136222728237');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a member. Shout if you have any questions and check the <#651892874740498442> to join any team. Use <#646767159506370561> to gain access to platform chat channels you use.`);
        message.member.roles.add(Member);
    }

});

//Test that is being used on my server
client.on('message', function(message) {
    if(message.author.bot) return;
    if(message.content.includes ('test')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('695376364437635123');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a member. Shout if you have any questions and check the member channel to join any team. Use general to gain access to platform chat channels you use.`);
        message.member.roles.add(dserv);
    }

});


client.login(process.env.BOT_TOKEN);