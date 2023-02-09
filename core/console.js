/* MODULE NOT USED YET */
require('dotenv').config()

function log(text) {
    console.log(text)
}
function debug(text) {
    // blue
    console.log('\x1b[34m%s\x1b[0m', text)
}
function info(identification,text) {
    // green
    console.log('\x1b[32m {info} [' + identification + '] \x1b[0m'  + text )
}
function warn(identification,text) {
    // yellow
    console.log('\x1b[33m {!WARNING!}['+ identification + '] \x1b[0m' + text)
}
function error(identification,text) {
    // red
    console.log('\x1b[31m {ERROR} ['+ identification + '] \x1b[0m' + text)
}
function fatal(identification,text) {
    // red
    console.log('\x1b[31m {FATAL} ['+ identification + '] \x1b[0m' + text)
    process.exit(1)
}


module.exports = {
    log,
    debug,
    info,
    warn,
    error,
    fatal
}
