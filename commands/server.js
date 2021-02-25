/**
 * This class responds to anyone that types !bot talk and chooses one of the phrases below to respond with at random.
 *
 */
module.exports = {
    name: 'server', // The name of the command
    description: 'Server Control', // The description of the command (for help text)
    args: true, // Specified that this command doesn't need any data other than the command
    usage: '', // Help text to explain how to use the command (if it had any arguments)
    execute(message, args) {
        if(args[0] == "test") {
            Application.getAllServers().then(servers => {
                console.log(servers)
                // Retuns an array of servers (see below)
            }).catch(err => {
                console.log(err);
            })
        }
    },
};