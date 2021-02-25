const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTimestamp(new Date())
    .setDescription(`🏓 ${client.ws.ping}ms`)
    .setTitle("Oozora Subaru Ping Status")
    .setFooter("© 2020 Pumpkin Project. All rights reserved.")

    return message.channel.send(embed);
}

exports.help = {
  name: "ping",
  description: "Melihat Koneksi Si BOT",
  usage: "ping",
  example: "ping"
};

exports.conf = {
  aliases: ["beep"],
  cooldown: 5 // This number is a seconds, not a milliseconds.
  // 1 = 1 seconds.
}
