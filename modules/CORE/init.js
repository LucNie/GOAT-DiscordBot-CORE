const exec = require('child_process').exec;
const colors = require('colors');
require('dotenv').config();

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



module.exports = { 

    name: 'init', 
    description: '',
    async execute() {
        console.log("{INFO} [COREInit] Core powering up !")

        getOpenPorts().then(ports => {
            console.log(ports);
          }).catch(error => {
            console.error(error);
          });

          getRunningContainers().then(containers => {
            console.log(containers);
          }).catch(error => {
            // red
            console.warn(colors.yellow('{WARNING} [getRunningContainers] no containers running'));
          });
          
    },
};
