const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    const { url } = await fetch('https://nekos.life/api/v2/img/smug').then(response => response.json());
    let smug = new MessageEmbed()
    .setColor('BLUE')
    .setDescription(`${message.author.tag} feeling **smug**`)
    .setImage(url)
    message.channel.send(smug); 
}

exports.help = {
  name: "smug",
  description: "Menampilkan Gif",
  usage: "smug @user",
  example: "smug @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
