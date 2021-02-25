const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/cuddle').then(response => response.json());
    let cuddle = new MessageEmbed()
    .setDescription(`${message.author.tag} **cuddling** ...`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(cuddle);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/cuddle').then(response => response.json());
    let cuddle = new MessageEmbed()
    .setDescription(`${message.author.tag} **cuddling** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(cuddle); 
  }
}

exports.help = {
  name: "cuddle",
  description: "Menampilkan Gif",
  usage: "cuddle @user",
  example: "cuddle @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
