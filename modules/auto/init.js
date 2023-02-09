const {Docker} = require('node-docker-api');

function listContainers() {
    const docker = new Docker({socketPath: '/var/run/docker.sock'});
    return docker.container.list();
}

module.exports = { 

    name: 'init', 
    description: '',
    async execute() {
        // list all containers
        // listContainers().then(containers => {
        //     containers.forEach(container => {
        //         console.log(container.data);
        //     });
        // });
    },
};
