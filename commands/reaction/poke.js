const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/poke').then(response => response.json());
    let poke = new MessageEmbed()
    .setDescription(`${message.author.tag} **pokes** ...`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(poke);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/poke').then(response => response.json());
    let poke = new MessageEmbed()
    .setDescription(`${message.author.tag} **pokes** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(poke); 
  }
}

exports.help = {
  name: "poke",
  description: "Menampilkan Gif",
  usage: "poke @user",
  example: "poke @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
