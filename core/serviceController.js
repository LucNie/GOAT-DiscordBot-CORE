let colors = require('colors');

const HOST = '127.0.0.1';

function listDocker(){
// run dockerList.sh and get the output
    const { exec } = require('child_process');
    exec('sh dockerList.sh', (err, stdout, stderr) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(stdout);
    });
}
listDocker();