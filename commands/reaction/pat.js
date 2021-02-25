const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/pat').then(response => response.json());
    let pat = new MessageEmbed()
    .setDescription(`${message.author.tag} **pats** ...`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(pat);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/pat').then(response => response.json());
    let pat = new MessageEmbed()
    .setDescription(`${message.author.tag} **pats** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(pat); 
  }
}

exports.help = {
  name: "pat",
  description: "Menampilkan Gif",
  usage: "pat @user",
  example: "pat @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
