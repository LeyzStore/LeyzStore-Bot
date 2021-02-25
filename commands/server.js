/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
const { prefix, token, host, key } = require('../config.json');     // Loads the "token" and "prefix" values from the config file
const node = require('nodeactyl-beta');

module.exports = {
    name: 'server', // The name of the command
    description: 'Server Control', // The description of the command (for help text)
    args: true, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    async execute(message, args) {
        if(args[0] == "test") {
            const Application = new node.NodeactylApplication(host, key);
            let server = await Application.getAllServers();
            for(let i = 0; i< server.length; i++) {
                let name = server[i].attributes.name;
                let id = server[i].attributes.id;
                let uuid = server[i].attributes.uuid;
                let uuid_short = server[i].attributes.identifier;
                let ram = server[i].attributes.limits.memory;
                let disk = server[i].attributes.limits.disk;
                let owner = server[i].attributes.user;
                console.log(name)
                console.log(uuid_short)
              }
        }
    },
};