let colors = require('colors');

const HOST = '127.0.0.1';

// fuction that return all ports used  
async function listPortsUsed() {
    // return the list of ports used
    return new Promise((resolve, reject) => {
        const spawn = require('child_process').spawn;
        // json
        child = spawn("powershell.exe",["Get-NetTCPConnection | Select-Object LocalPort | ConvertTo-Json"]);
        child.stdout.on("data",function(data){
            let _ports = [];
            let _portsData = JSON.parse(data);
            for (let i = 0; i < _portsData.length; i++) {
                _ports.push(_portsData[i].LocalPort);
            }
            resolve(_ports);
        
        });
        child.stdin.end(); //end input
    });

}

function isPortUsed(aPort) { // localhost
    return new Promise((resolve, reject) => {
        const exec = require('child_process').exec;
        exec('netstat -ano -p tcp | findstr ' + HOST + ':' + aPort, (err, stdout, stderr) => {
            if (err) {
                // node couldn't execute the command
                resolve(false);
                return;
            }
            // the *entire* stdout and stderr (buffered)
            // if not TIME_WAIT
            if (stdout.includes("ESTABLISHED")) {
                resolve(true);
                return;
            }
            if (stdout.includes("TIME_WAIT")) {
                resolve(false);
                return;
            }
            // if not LISTENING
        });
    });
}


module.exports = {
    listPortsUsed,
    isPortUsed
}
            

