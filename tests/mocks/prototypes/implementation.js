/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, setTimeout: false, __filename: false, __dirname: false */

var protocol = require('../../../protocols');

var impl = module.exports = function(){
	
}

impl.prototype.foo = function(){
	
}

impl.prototype.bar = function(){
	
}

module.exports.protocol = protocol.implement(impl, __dirname + '/../prototypeProtocol.js', false)