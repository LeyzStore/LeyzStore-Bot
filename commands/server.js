/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
const { prefix, token, host, key } = require('../config.json');     // Loads the "token" and "prefix" values from the config file
const node = require('nodeactyl-beta');
const node2 = require('nodeactyl-v1-support');
const Admin = node2.Admin;
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
    },
};