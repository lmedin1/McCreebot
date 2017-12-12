// User defined constants
const botPrefix = 'm!';

// import the discord.js module
const Discord = require('discord.js');
//Dice Roller
var dice = require('rpg-dice');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();

// the token of the bot in the auth file- https://discordapp.com/developers/applications/me
const AuthInfo = require("./auth.json");

// Ready event starts the bot, and gets it ready to go.
bot.on('ready', () => {
  console.log('Watch and learn\n');
  bot.user.setGame('Overwatch');
});

//Chatting
var calls = ["Hello.", "Hey.", "Hi.", "Hey, McCree, do you know what time it is?", "You know, smoking's bad for your health.", "McCree, where did you learn to shoot like that? Was it Jack, Gabriel?",
             "I didn't teach you all my tricks.", "I taught you everything you know.", "You look ridiculous.", "Pleasure working with you McCree... if that is your real name.", "I love you, McCree.", "Bye.", "Bye, McCree!"];
var responses = ["Well met.", "Howdy.", "Howdy, partner.", "Well, I'd say it's about... now I see what you're doing there!", "Well, I have faith you can get me patched back up, doc.",
                 "Always was a good shot, but I got a few pointers from the best. That'd be your mother.", "Lucky for me I still have a few tricks of my own.", "Not everythin'.",
                 "Looked in a mirror lately?", "Don't know what you heard, but my name's not Joel. Best remember that.", "Well gosh, I love you too, pumpkin.", "See ya, partner.", "See ya."];
//8-ball
var eightBall = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.",  "Yes.", "Signs point to yes.", "Reply hazy try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",  "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful.", "Uncertain."];

// create an event listener for messages
bot.on('message', message => {

	//Display the available calls
	if (message.author.bot) {
		return;
	}

    // Parsing multiple arguments
    var messageParts = message.content.split(" ");

    var index = calls.indexOf(message.content);

    if (index != -1) {
        message.channel.sendMessage(responses[index]);
    }

	//8-ball interaction
	if (messageParts[0] === (botPrefix + '8ball')) {
		message.channel.send(eightBall[Math.floor(Math.random()*eightBall.length)]);
	}

	if (messageParts[0] === (botPrefix + 'roll')) {
     var rolls = dice.roll(messageParts[1]).rolls;
     if (rolls == "") {
         message.channel.send("The syntax of the command is: m!roll #d#");
     }

     else {
         message.channel.send("You rolled: " + rolls);
     }
}

	if (messageParts[0] === (botPrefix + 'calls')) {
		message.channel.send(calls);
	}
});

// log our bot in
bot.login(token);
