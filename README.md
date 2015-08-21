# Node-Protocols #

a tiny implementation to fulfil protocols in nodejs.

## Description ##

A js object does not have any possibilities to implement a protocol (Interface) at language level. 
Well, that is very good in many ways, but get extrem unhandy when implementing a pluggable system.
**node-protocols** is a tiny object extension to allow a class implements one or more protocols.

## Disclaimer ##

This Module is a development draft. Please check, read, and contribute. Do not use this early version in a production branch!

## Example ##

Create a myProtocol.js file:

```
module.exports.foo = function(){};
module.exports.bar = function(){};
module.exports.s = String();
```

Than implement a module like:

```
var impl = module.exports = {
	foo: function(){
		console.log("I am foo");
	}
}
```

To confirm that module to a protocol require node-protocols

```
var protocol = require('node-protocols');
```

and set your implementation against a protocol: 

```
module.exports.protocol = protocol.implement(impl, 'myProtocol.js')
```

## protocol.implement ##

Implement does have 3 Parameters:

* module
* Protoccol-List
* (optional) throw exception

If the exeution of the application should not be terminated when a protocol is not fulfilled, than pass a "false" to the implement function:

```
module.exports.protocol = protocol.implement(impl, 'myProtocol.js', false)
```

## Protocol Functions ##

### confirmsToProtocols ###

Returns a list of the protocols that the implementation successfully implements. 

### fulfillProtocols ###

Returns a boolean indicator "true" if all protocols are successfully implemented.

## Contribute ##

Please help to improve the solution or send a Satoshi to 1DtvkCh28zqarTEUHtxs7gWtutsv2Cnf9d to feed the developers.

## Contact ##
See https://www.ausdertechnik.de for more details.
