const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/tickle').then(response => response.json());
    let tickle = new MessageEmbed()
    .setDescription(`${message.author.tag} **tickles** ...`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(tickle);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/tickle').then(response => response.json());
    let tickle = new MessageEmbed()
    .setDescription(`${message.author.tag} **tickles** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(tickle); 
  }
}

exports.help = {
  name: "tickle",
  description: "Menampilkan Gif",
  usage: "tickle @user",
  example: "tickle @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
