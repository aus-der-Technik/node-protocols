
var protocol = require('../../../protocols');

var impl = module.exports = {
	foo: function(){
		console.log("I am foo");
	}
	, bar: function(){
		console.log("I am bar");
	}
	, s: "I am a string"
	, baz: 3
}

module.exports.protocol = protocol.implement(impl, [
	  __dirname + '/../protocol.js'
	, __dirname + '/../secondProtocol.js'
], false);
