const Discord = require("discord.js");
const node = require('nodeactyl-beta');
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
        return message.channel.send({embed: {color: "RED", description: "You can't use this command!"}})
      }
    let Application = new node.NodeactylApplication("https://panel.leyzstore.net/", "mf7CevvWBBu8WWkHoXbcvdXtIy3yCST7x1WAuUPISpZxK3ui");
    if (!args[0]){
        message.channel.send("INPUT SESUATU");
        Application.createSimpleServer("1", "3", "1000","10000","100","1","1","2").then(res => {
            console.log(res)
        }).catch(error =>{
            console.log(error);
        })
    } else {
        
        let user = await Application.getUserDetails(args[0]);
        let username = user.attributes.username;
        let email = user.attributes.email;
        console.log(email)
          // You can make a single array to detect the user permissions.
    }
}

exports.help = {
  name: "userinfo",
  description: "Set a user nickname.",
  usage: "/setnickname <@user> <nick>",
  example: "/setnickname @ray#9999 hoisted"
}

exports.conf = {
  aliases: ["nuke"],
  cooldown: 5
}