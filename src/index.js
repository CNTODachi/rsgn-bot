require('dotenv').config();
const discord = require('discord.js');
const client = new discord.Client();
const Member = '643002643110952962';
const Friend = '652571265869152266';
const ArmyAFF = '683982696703328271';
const NavyAFF = '680110567385464864';
const RAFAFF = '684883054824652826';
const dserv = '647540203082219550';

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`);
});

//Code that is running on RSGN server live
client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('@mod.gov.uk')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('656194136222728237');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a member. Shout if you have any questions and check the <#651892874740498442> to join any team. Use <#646767159506370561> to gain access to platform chat channels you use.`);
        message.member.roles.add(Member);
    }

});

client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('civilian')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('656194136222728237');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a Friend. Shout if you have any questions and check the <#651892874740498442> to join any team. Use <#646767159506370561> to gain access to platform chat channels you use.`);
        message.member.roles.add(Friend);
    }

});

client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('veteran')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('656194136222728237');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a Friend. Shout if you have any questions and check the <#651892874740498442> to join any team. Use <#646767159506370561> to gain access to platform chat channels you use.`);
        message.member.roles.add(Friend);
    }

});

client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('army affiliate')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('656194136222728237');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a Friend. Shout if you have any questions and check the <#651892874740498442> to join any team. Use <#646767159506370561> to gain access to platform chat channels you use.`);
        message.member.roles.add(ArmyAFF);
    }

});

client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('navy affiliate')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('656194136222728237');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a Friend. Shout if you have any questions and check the <#651892874740498442> to join any team. Use <#646767159506370561> to gain access to platform chat channels you use.`);
        message.member.roles.add(NavyAFF);
    }

});

client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('raf affiliate')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('656194136222728237');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a Friend. Shout if you have any questions and check the <#651892874740498442> to join any team. Use <#646767159506370561> to gain access to platform chat channels you use.`);
        message.member.roles.add(RAFAFF);
    }

});

//Test that is being used on my server
client.on('message', function(message) {
    if(message.author.bot) return;
    msg = message.content.toLowerCase();
    if(msg.includes ('test bot')) {
        const user = message.author;
        let arrivalswelcome = client.channels.cache.get('695376364437635123');
        arrivalswelcome.send(`<@${user.id}> Welcome, I have given you permissions as a member. Shout if you have any questions and check the member channel to join any team. Use general to gain access to platform chat channels you use.`);
        message.member.roles.add(dserv);
    }

});


client.login(process.env.BOT_TOKEN);