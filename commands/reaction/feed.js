const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/feed').then(response => response.json());
    let feed = new MessageEmbed()
    .setDescription(`${message.author.tag} **feed** ...`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(feed);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/feed').then(response => response.json());
    let feed = new MessageEmbed()
    .setDescription(`${message.author.tag} **feed** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(feed); 
  }
}

exports.help = {
  name: "feed",
  description: "Menampilkan Gif",
  usage: "feed @user",
  example: "feed @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
