/* MODULE NOT USED YET */

let colors = require('colors');
require('dotenv').config()

function log(text) {
    console.log(text)
}
function debug(text) {
    // blue
    console.log(colors.blue(text))
}
function info(identification,text) {
    // green
    console.log(colors.green(`{INFO} [${identification}] : ` + text))
}
function warn(identification,text) {
    // yellow
    console.log(colors.yellow(`{WARNING} [${identification}] ${text}`))
}
function error(identification,text) {
    // red
    console.log(colors.red(`{ERROR} [${identification}] ${text}`))
}
function fatal(identification,text) {
    // white on red background
    console.log(colors.bgRed.white(`{FATAL} [${identification}] ${text}`))
}

module.exports = {
    log,
    debug,
    info,
    warn,
    error,
    fatal
}
