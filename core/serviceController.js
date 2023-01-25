let colors = require('colors');

const HOST = '127.0.0.1';

// fuction that return all ports used  
async function listPortsUsed() {
    // return the list of ports used
    return new Promise((resolve, reject) => {
        const exec = require('child_process').exec;
        exec('netstat -ano -p tcp | findstr ' + HOST, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                reject(err);
                return;
            }
            // the *entire* stdout and stderr (buffered)
            let ports = [];
            let lines = stdout.split("\r\n");
            lines.forEach(line => {
                let port = line.split(" ").filter(item => item != "").pop();
                if (port != undefined) {
                    ports.push(port);
                }
            });

            // console.log("{INFO} [serviceController] Ports used : " + colors.green(ports));
            resolve(ports);
        });
    });
}

module.exports = {
    listPortsUsed
}
            

