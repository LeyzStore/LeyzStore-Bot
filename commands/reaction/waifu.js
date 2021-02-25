const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    const { url } = await fetch('https://nekos.life/api/v2/img/waifu').then(response => response.json());
    let waifu = new MessageEmbed()
    .setDescription(`Ini Waifu Mu`)
    .setImage(url)
    .setColor('BLUE')
    message.channel.send(waifu); 
  }

exports.help = {
  name: "waifu",
  description: "Menampilkan Gif",
  usage: "baka @user",
  example: "baka @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
