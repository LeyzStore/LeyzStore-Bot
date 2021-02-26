/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
const { prefix, token, host, key, keyuser } = require('../config.json');     // Loads the "token" and "prefix" values from the config file
const node = require('nodeactyl-beta');
const node2 = require('nodeactyl-v1-support');
const Admin = node2.Admin;
const Client = node2.Client;
const Application = new node.NodeactylApplication(host, key);
const { MessageEmbed } = require("discord.js");
const thousands = require('thousands');

module.exports = {
    name: 'user', // The name of the command
    description: 'User Control', // The description of the command (for help text)
    args: true, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    async execute(message, args) {
        if (message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
            if (args[0] == "create"){
                let user = await Application.createUser(args[1], args[2], args[3], args[4]);
                console.log(user);
                if(!user){
                    message.channel.send("ERROR COK")
                }
                let userid = user.attributes.id;
                let username = user.attributes.username;
                let email = user.attributes.email;
                let first_name = user.attributes.first_name;
                let last_name = user.attributes.last_name;
                // Application.createUser("kaguvps@gmail.com", "KaguVPS", "Kagu", "Vps").then(user => {
                let UserInfo = new MessageEmbed()
                    .setAuthor("Account Created", "https://cdn.discordapp.com/attachments/786854213916426240/814077727534612500/depositphotos_81700460-stock-illustration-monogram-l-logo-letter.jpg")
                    .setColor("GREEN")
                    .setTitle(`${username} (${userid})`)
                    .setDescription("Akun Kamu kamu berhasil di buat, Periksa Email Untuk Mengubah Password, Periksa Pada Bagian Promosi Jika Email Tidak Muncul")
                    .addField("Username", username)
                    .addField("Email", email)
                    .addField("First Name", first_name, true)
                    .addField("Last Name", last_name, true)
                    .setFooter("Leyz Store", "https://cdn.discordapp.com/attachments/786854213916426240/814077727534612500/depositphotos_81700460-stock-illustration-monogram-l-logo-letter.jpg")
                message.channel.send(UserInfo)
            }
        }
    },
};