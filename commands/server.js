/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
const { prefix, token, host, key } = require('../config.json');     // Loads the "token" and "prefix" values from the config file
const node = require('nodeactyl-beta');
const node2 = require('nodeactyl-v1-support');
const Admin = node2.Admin;
const Application = new node.NodeactylClient(host, key);
const { MessageEmbed } = require("discord.js");
const thousands = require('thousands');

module.exports = {
    name: 'server', // The name of the command
    description: 'Server Control', // The description of the command (for help text)
    args: true, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    async execute(message, args) {
//START OF LIST SERVER
        if(args[0] == "list") {
            Admin.login(host, key, (logged_in, err) => {
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
        }
//END OF LIST SERVER
//START OF CREATE SERVER
        if(args[0] == "create"){
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
        } 
 //END OF CREATE SERVER
 //START OF DELETE SERVER       
        if (args[0] == "delete"){
            let ServerDelete = await Application.deleteServer(args[1]);
            if(ServerDelete != true) {
              return message.channel.send(`Server Dengan ID ${args[1]} Tidak Tersedia`)
            } else {
              return message.channel.send(`Berhasil Menghapus Server Dengan ID ${args[1]}`)
            }
        }
    },
};