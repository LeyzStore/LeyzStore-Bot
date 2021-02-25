const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/kiss').then(response => response.json());
    let kiss = new MessageEmbed()
    .setDescription(`${message.author.tag} **kisses** ...`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(kiss);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/kiss').then(response => response.json());
    let kiss = new MessageEmbed()
    .setDescription(`${message.author.tag} **kisses** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(kiss); 
  }
}

exports.help = {
  name: "kiss",
  description: "Menampilkan Gif",
  usage: "kiss @user",
  example: "kiss @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
