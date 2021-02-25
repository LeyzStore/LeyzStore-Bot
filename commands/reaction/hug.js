const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/hug').then(response => response.json());
    let hug = new MessageEmbed()
    .setDescription(`${message.author.tag} **hugs** ...`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(hug);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/hug').then(response => response.json());
    let hug = new MessageEmbed()
    .setDescription(`${message.author.tag} **hug** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(hug); 
  }
}

exports.help = {
  name: "hug",
  description: "Menampilkan Gif",
  usage: "hug @user",
  example: "hug @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
