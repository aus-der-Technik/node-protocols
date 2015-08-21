
var protocol = require('../../../protocols');

var impl = module.exports = {
	foo: function(){
		console.log("I am foo");
	}
}

module.exports.protocol = protocol.implement(impl, __dirname + '/../protocol.js', false)