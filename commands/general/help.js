const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = client.config.prefix;
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
  }
  if (!args[0]) {
    // This will turn the folder (category) into array.
    let module = client.helps.array();
    
    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTimestamp(new Date())
    .setDescription(`Gunakan \`${prefix}help <command>\` untuk melihat info dan panduan penggunaannya`)
    .addField(`💃 Reaction`, `baka, cuddle, feed, hug, kiss, \npat, feed, poke, slap, tickle`, true)
    .addField(`💻 Bots`, `help, invite, ping, status`, true)
    .addField(`🌐 Server/Guilds`, `avatar, info, server, github, covid`, true)
    .addField(`👮‍♂️ Moderation`, `kick, ban, setnickname,`, true)
    .addField("Pumpkin Craft", `mcinfo, topvote`, true)
    .setTitle("Oozora Subaru Help Menu")
    .setFooter("© 2020 Pumpkin Project. All rights reserved.")

    return message.channel.send(embed);
  } else {
    let cmd = args[0];
    
    // If the user type the [command], also with the aliases.
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      let name = command.help.name; // The command name.
      let desc = command.help.description; // The command description.
      let cooldown = command.conf.cooldown + " second(s)"; // The command cooldown.
      let aliases = command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "No Aliases";
      let usage = command.help.usage ? command.help.usage : "No Usage";
      let example = command.help.example ? command.help.example : "No Example";
      
      let embed = new Discord.MessageEmbed()
      .setColor(0x7289DA)
      .setTitle(`📖 HELP | ***${name}***`)
      .setDescription(desc)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Oozora Subaru Help Menu")
      .addField("Cooldown", cooldown)
      .addField("Aliases", aliases, true)
      .addField("Usage", usage, true)
      .addField("Example", example, true)
      
      return message.channel.send(embed);
    } else {
      // If the user type the wrong command.
      return message.channel.send({embed: {color: "RED", description: "❌ Maaf Contoh Belum Di Buat Atau Command Tidak Tersedia."}});
    }
  }
}

exports.help = {
  name: "help",
  description: "Show a command list.",
  usage: "help [command]",
  example: "/help"
}

exports.conf = {
  aliases: ["?"],
  cooldown: 5
}
