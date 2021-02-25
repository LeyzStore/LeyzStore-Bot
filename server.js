const Discord = require("discord.js");
const tutorialBot = require("./handler/ClientBuilder.js"); // We're gonna create this soon.
const client = new tutorialBot();
const node = require('nodeactyl-beta');
const user = node.Client
//BOT
const config = require('./config.json')
//UPTIME ROBOT (WEB)
client.on("ready", async () => {
  console.log(`${client.user.username} is ready`);
  client.user.setActivity(`on LeyzStore`, {type: "PLAYING"}); //UBAH PRESENCE/STATUS BOT DISINI
});
//BOT
require("./handler/module.js")(client);
require("./handler/Event.js")(client);

client.package = require("./package.json");
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(config.token).catch(console.error); // This token will leads to the .env file. It's safe in there.
client.on('guildMemberAdd', member => {
  console.log('User ' + member.user.username + ' has joined the server!')
  var role = member.guild.roles.cache.find(role => role.name === 'Member');
  member.roles.add(role)
});
//TAMBAH INI DAN