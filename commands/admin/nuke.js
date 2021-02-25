const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
  } else {
    message.channel.clone()
    message.channel.delete()
    message.channel.send("Nuked this channel./n https://imgur.com/LIyGeCR")
  }

  
  // You can make a single array to detect the user permissions.
}

exports.help = {
  name: "nuke",
  description: "Set a user nickname.",
  usage: "/setnickname <@user> <nick>",
  example: "/setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["nuke"],
  cooldown: 5
}