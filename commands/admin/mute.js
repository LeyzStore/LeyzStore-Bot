const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
let reason = args.slice(1).join(' ');
let user = message.mentions.users.first();
let role = message.guild.roles.find('name', 'Muted')

if (!logchannel) return message.reply('I cannot find a logs channel');
if (!message.member.hasPermission("MUTE_MEMBERS")) return 
message.reply(":no_entry_sign: **Error:** You don't have the **Mute Members** permission!");
if (reason.length < 1) return message.reply('You must supply a reason for the mute.');
if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);

if (!message.guild.member(user).bannable) return 
message.reply(`:no_entry_sign: I cannot mute that member`);
message.guild.member(user).addRole(role);

const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .addField('Action:', 'Mute')
  .addField('User:', `${user.username}#${user.discriminator} (${user.id})`)
  .addField('Moderator:', 
  `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  message.channel.send(`:hammer: Bippity boppity **MUTED**! I\'ve logged the 
  mute in the logs channel.`)
  return client.channels.get(logchannel.id).send({embed});
  };


exports.help = {
  name: "mute",
  description: "Menampilkan Gif",
  usage: "mute @user",
  example: "mute @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
