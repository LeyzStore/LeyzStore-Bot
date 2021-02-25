const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/baka').then(response => response.json());
    let baka = new MessageEmbed()
    .setDescription(`... **BAKA!!**`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(baka);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/baka').then(response => response.json());
    let baka = new MessageEmbed()
    .setDescription(`${taggedUser.username} **BAKA!!**`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(baka); 
  }
}

exports.help = {
  name: "baka",
  description: "Menampilkan Gif",
  usage: "baka @user",
  example: "baka @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
