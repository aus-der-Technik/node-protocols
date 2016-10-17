/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, setTimeout: false, __filename: false, __dirname: false */

var protocol = require('../../../protocols');

var impl = module.exports = {
    foo: function(){
        console.log("I am foo");
    },
     bar: "",
    s: ""
}

module.exports.protocol = protocol.implement(impl, __dirname + '/../nullProtocol.js', false)