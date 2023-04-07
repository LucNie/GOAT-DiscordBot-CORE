const exec = require('child_process').exec;
const cc = require('../../core/console')
const colors = require('colors');
require('dotenv').config();

const { ActivityType } = require('discord.js');



function getRunningContainers() {
    return new Promise((resolve, reject) => {
        exec('docker ps --format "{{.Names}}"', (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            let containers = stdout.trim().split('\n');
            resolve(containers);
        });
    });
}

function getOpenPorts() {
    return new Promise((resolve, reject) => {
        exec('netstat -a -n -o', (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }
            let openPorts = [];
            let lines = stdout.split('\n');
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                let tokens = line.trim().split(/\s+/);
                if (tokens.length >= 4 && tokens[0] === 'TCP') {
                    let localAddress = tokens[1];
                    let port = localAddress.split(':')[1];
                    if (!isNaN(port)) {
                        openPorts.push(port);
                    }
                }
            }
            resolve(openPorts);
        });
    });
}

function execute(client) {
    cc.info('auto.init','Auto powering up...')
    if (process.env.CHECKS_ENABLED === 'true') {


        if (process.env.CHECKS_DOCKER_ENABLED === 'true') {
            _checkDocker();
            function _checkDocker() {
                setInterval(async () => {
                    let containers = await getRunningContainers();
                    

                    if (process.env.CHECKS_DOCKER_ENABLED === 'true') {
                        let __list = ''
                        // ENV CHECKS_DOCKER ";" between containers
                        let __containers = process.env.CHECKS_DOCKER_NAMES.split(';')
                        for (let i = 0; i < __containers.length; i++) {
                            const container = __containers[i];
                            if (container === '') continue;
                            if (containers.includes(container)) {
                                __list += container + ' ✅ '
                            } else {
                                __list += container + ' ❌ '
                            }
                        }
                        // set new status
                        cc.info('auto.init','Discord status set to: ' + __list )
                        client.user.setPresence({
                            activities: [{ name: `${__list}`, type: ActivityType.Playing }],
                            status: 'online',
                        });
                    }
                }, process.env.CHECKS_INTERVAL * 1000);
            }
        }

        if (process.env.CHECKS_PORTS_ENABLED === 'true') {
            _checkPort();

            function _checkPort() {
                setInterval(async () => {
                    let openPorts = await getOpenPorts();
                    // console.log(openPorts)
                    if (process.env.CHECKS_DISCORD_STATUS_ENABLED === 'true') {
                        let __list = ''
                        // ENV CHECKS_PORTS ";" between ports
                        let __ports = process.env.CHECKS_PORTS.split(';')
                        let __portsNames = process.env.CHECKS_PORTS_NAMES.split(';')
                        for (let i = 0; i < __ports.length; i++) {
                            const port = __ports[i];
                            const portName = __portsNames[i];
                            if ( port === '') continue;
                            if (openPorts.includes(port)) {
                                __list += portName + ' ✅ '
                            } else {
                                __list += portName + ' ❌ '
                            }
                        }
                        // set new status
                        cc.info('auto.init','Discord status set to: ' + __list )
                        client.user.setPresence({
                            activities: [{ name: `${__list}`, type: ActivityType.Playing }],
                            status: 'online',
                        });



                       
                    }

                }, process.env.CHECKS_INTERVAL * 1000); // default 60 seconds 
            }
        }
    }
}

module.exports = {

    name: 'init',
    description: '',
    execute
    
};
