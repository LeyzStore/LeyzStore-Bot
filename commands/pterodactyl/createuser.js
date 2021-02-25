const Discord = require("discord.js");
const node = require('nodeactyl-v1-support');
const Admin = node.Admin
const user = node.Client
exports.run = async (client, message, args) => {

  Admin.createUser("TEST", "12345", "sahrul@gmail.com", "test", "user", false, "en").then(user => {
    // Returns a user object (see below)
    console.log(user)
}).catch(err => {
    console.log(err);
})

  
  // You can make a single array to detect the user permissions.
}

exports.help = {
  name: "createuser",
  description: "Set a user nickname.",
  usage: "/setnickname <@user> <nick>",
  example: "/setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["nuke"],
  cooldown: 5
}