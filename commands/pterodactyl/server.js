const Discord = require("discord.js");
const requestPromise = require("request-promise-native");
const node = require('nodeactyl-beta');
const node2 = require('nodeactyl-v1-support');
const Admin = node2.Admin;
let Application = new node.NodeactylApplication('https://panel.leyzstore.net/', 'mf7CevvWBBu8WWkHoXbcvdXtIy3yCST7x1WAuUPISpZxK3ui');
const thousands = require('thousands');
const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
  }
  if(!args[0]) {
    message.channel.send("NO ARG")
  } else if(args[0] == "list") {
    Admin.login('https://panel.leyzstore.net/', 'mf7CevvWBBu8WWkHoXbcvdXtIy3yCST7x1WAuUPISpZxK3ui', (logged_in, err) => {
      console.log(logged_in);
      /** If you want call the function in here, 
       * But we prefer you do have Application.login() at the top of your
       * project and use the following syntax:
       */
  });
    let server = await Admin.getAllServers();
    for(let i = 0; i< server.length; i++) {
      let name = server[i].attributes.name;
      let id = server[i].attributes.id;
      let uuid = server[i].attributes.uuid;
      let uuid_short = server[i].attributes.identifier;
      let ram = server[i].attributes.limits.memory;
      let disk = server[i].attributes.limits.disk;
      let owner = server[i].attributes.user;

      let ServerINFO = new MessageEmbed()
        .setAuthor("SERVER LIST", "https://cdn.discordapp.com/attachments/786854213916426240/814077727534612500/depositphotos_81700460-stock-illustration-monogram-l-logo-letter.jpg")
        .setColor("RED")
        .setTitle(name)
        .setDescription(uuid)
        .addField("UUID", uuid_short, true)
        .addField("ID", id, true)
        .addField("OWNER ID", owner, true)
        .addField("RAM", thousands(ram, '.'), true)
        .addField("DISK", thousands(disk, '.'), true)
        .addField("NONE", "NONE :V", true)
        .setFooter("Leyz Store", "https://cdn.discordapp.com/attachments/786854213916426240/814077727534612500/depositphotos_81700460-stock-illustration-monogram-l-logo-letter.jpg")
      message.channel.send(ServerINFO)
    }
  } else if(args[0] == "create") {
    let NewServer = await Application.createServer("latest", args[1], args[2], args[3], "quay.io/pterodactyl/core:java-11", "java -Xms128M -Xmx{{SERVER_MEMORY}}M -Dterminal.jline=false -Dterminal.ansi=true -jar {{SERVER_JARFILE}}", args[4], "0", args[5], "500", "0", "0", "2", "1");
    console.log(NewServer)
    if(!NewServer){
      message.channel.send("ERROR COK")
    } else {
      let ServerNew = new MessageEmbed()
      .setAuthor("SERVER CREATED", "https://cdn.discordapp.com/attachments/786854213916426240/814077727534612500/depositphotos_81700460-stock-illustration-monogram-l-logo-letter.jpg")
      .setTitle(args[1] + ` (${NewServer.attributes.identifier})`)
      .setDescription("Server Berhasil Dibuat Dengan Selamat")
      .addField("RAM", thousands(args[4],'.'), true)
      .addField("DISK", thousands(args[5],'.'), true)
      .addField("CPU", "Unlimited", true)
      .addField("PORT ID", NewServer.attributes.allocation, true)
      .addField("VERSION", "Paper 1.15.2", true)
      .addField("NODE", "SG-1", true)
      .setFooter("Leyz Store", "https://cdn.discordapp.com/attachments/786854213916426240/814077727534612500/depositphotos_81700460-stock-illustration-monogram-l-logo-letter.jpg")
    message.channel.send(ServerNew)

    }
  } else if(args[0] == "delete") {
    let ServerDelete = await Application.deleteServer(args[1]);
    if(ServerDelete != true) {
      return message.channel.send(`Server Dengan ID ${args[1]} Tidak Tersedia`)
    } else {
      return message.channel.send(`Berhasil Menghapus Server Dengan ID ${args[1]}`)
    }
  }






}

exports.help = {
  name: "server",
  description: "List a Server.",
  usage: "/serverlist",
  example: "/serverlist"
}

exports.conf = {
  aliases: ["server"],
  cooldown: 5
}