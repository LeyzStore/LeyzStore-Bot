const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")
exports.run = async (client, message, args) => {
    const taggedUser = message.mentions.users.first();
    const { voters } = await fetch('https://minecraft-mp.com/api/?object=servers&element=voters&key=m9vWhjIBLdytNdyxWy3YhB8qhyjx5NosPGi&month=current&format=json').then(response => response.json());

    let pat = new MessageEmbed()
  	.setAuthor('Top Vote This Month', 'https://api.mcsrvstat.us/icon/18.141.13.223')
    .setDescription("```apache\n1. " + voters[0].nickname + " - " + voters[0].votes + " Votes \n2. "+ voters[1].nickname + " - " + voters[1].votes + " Votes \n3. " + voters[2].nickname + " - " + voters[2].votes + " Votes \n4. " + voters[3].nickname + " - " + voters[3].votes + " Votes \n5. " + voters[4].nickname + " - " + voters[4].votes + " Votes \n6. " + voters[5].nickname + " - " + voters[5].votes + " Votes \n7. " + voters[6].nickname + " - " + voters[6].votes + " Votes \n8. " + voters[7].nickname + " - " + voters[7].votes + " Votes \n9. " + voters[8].nickname + " - " + voters[8].votes + " Votes \n10. " + voters[9].nickname + " - " + voters[9].votes + " Votes" + "\n```")
    .setFooter("© 2020 Pumpkin Project. All rights reserved.")
    .setTimestamp(new Date())
    message.channel.send(pat);
  }
exports.help = {
  name: "topvote",
  description: "Menampilkan Info Tentang Top Vote Server Pumpkin Craft",
  usage: "topvote",
  example: "topvote"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}
