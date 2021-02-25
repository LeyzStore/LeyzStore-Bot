const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if (!message.guild) return;

  // If the message content starts with "!unban"
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * unban the  
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .unban('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to unban the person
            message.reply(`Successfully unbaned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to unban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to unban the member');
            // Log the error
            console.error(err);
          });
      }
  } 
}
exports.help = {
  name: "unban",
  description: "unban User",
  usage: "unban @user",
  example: "unban @Sahrul"
}

exports.conf = {
  aliases: [],
  cooldown: 3
}