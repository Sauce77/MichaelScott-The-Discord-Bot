"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});

const ANSWERS_ = [
  "If I where in a room with Hitler, Bin Laden & You and a gun with 2 bullets... I'll shoot you twice.",
  "No GOD, please NO!!!", "Nonono only friends, weirdo."
];

function rI(){
  return (Math.floor(Math.random()*10));
}

function gotMessage(message){
  if(message.channel.id=="895461945031921669"){
  if(message.content=="Is longer"){
    message.reply("That's what she said...");
  }
  if(message.content=="Toby"){
    message.channel.send(ANSWERS_[rI()%ANSWERS_.length]);
  }
}
}

client.on("messageCreate",gotMessage);

// Login to Discord with your client's token
client.login(TOKEN);