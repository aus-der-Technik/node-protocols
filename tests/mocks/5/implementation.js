/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, setTimeout: false, __filename: false, __dirname: false */

var protocol = require('../../../protocols');

var impl = module.exports = {
    foo: function(){
        console.log("I am foo");
    }
    , bar: function(){
        console.log("I am bar");
    }
    , s: "I am a string"
}

module.exports.protocol = protocol.implement(impl, __dirname + '/../protocol.js', false)