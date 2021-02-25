const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    if(!args.length) {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/slap').then(response => response.json());
    let slap = new MessageEmbed()
    .setDescription(`${message.author.tag} **slap** ...`)
    .setImage(url)
    message.channel.send(slap);
          } else {
    const taggedUser = message.mentions.users.first();
    const { url } = await fetch('https://nekos.life/api/v2/img/slap').then(response => response.json());
    let slap = new MessageEmbed()
    .setDescription(`${message.author.tag} **slap** ${taggedUser.username}`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(slap); 
  }
}

exports.help = {
  name: "slap",
  description: "Menampilkan Gif",
  usage: "slap @user",
  example: "slap @Sahrul"
}

exports.conf = {
  aliases: ["tampar"],
  cooldown: 3
}
