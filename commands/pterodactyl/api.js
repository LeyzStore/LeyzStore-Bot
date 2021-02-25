const node = require('nodeactyl-v1-support');
const Admin = node.Admin;
const Client = node.Client;
const sleep = require('sleep-promise');

Admin.login('https://panel.leyzstore.net/', 'mf7CevvWBBu8WWkHoXbcvdXtIy3yCST7x1WAuUPISpZxK3ui', (logged_in, err) => {
    console.log("=====================================");
    console.log(`|| STATUS PANEL API = ${logged_in} ||`);
    console.log("=====================================");
});

sleep(1000).then(function () {
    console.log("Mencoba Menggambil Data Server")
    sleep(2000).then(function () {
        Admin.getAllServers().then(servers => {
            for(let i = 0; i< servers.length; i++){
               let name = servers[i].attributes.name;
               let uuid = servers[i].attributes.identifier;
            console.log(name + " " + uuid)
            }
            // Retuns an array of servers (see below)
            }).catch(err => {
                console.log(err);
            })
    })
        
})