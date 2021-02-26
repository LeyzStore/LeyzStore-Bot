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
                Application.createUser("kaguvps@gmail.com", "KaguVPS", "Kagu", "Vps").then(user => {
                    console.log(user)
                    // Returns a user object (see below)
                }).catch(err => {
                    console.log(err);
                })
            }

        }
    },
};