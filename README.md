# Node-Protocols #

a tiny implementation to fulfil protocols (Interfaces) in nodejs.

## Description ##

A js object does not have any possibilities to implement a protocol (Interface) at language level. 
Well, that is very good in many ways, but get extrem unhandy when implementing a pluggable system.
**node-protocols** is a tiny object extension to allow a class implements one or more protocols.


## Example ##

Create a myProtocol.js file:

```
module.exports.foo = function(){};
module.exports.bar = function(){};
module.exports.s = String();
```

Than implement a module like this:

```
var impl = module.exports = {
	foo: function(){
		console.log("I am foo");
	}
}
```

To confirm that this implementation confirms to a protocol, node-protocols is required.

```
var protocol = require('node-protocols');
```

Finally a member named "protocol" must be set in your implementation that defines the protocol: 

```
module.exports.protocol = protocol.implement(impl, 'myProtocol.js')
```

## protocol.implement ##

Implement does have 3 Parameters:

* module
* Protoccol-List
* (optional) throw exception

If the execution of the application should not be terminated when a protocol is not fulfilled, than pass a "false" to the implement function:

```
module.exports.protocol = protocol.implement(impl, 'myProtocol.js', false)
```

## Protocol Functions ##

### confirmsToProtocols ###

Returns a list of the protocols that the implementation successfully implements. 

### fulfillProtocols ###

Returns a boolean indicator "true" if all protocols are successfully implemented.

## Contribute ##

Yes, please help us to improve node-protocols and tell us your thoughts about this module.

## Contact ##
See https://www.ausdertechnik.de for more details.
if you like this tool, spend a Satoshi to this address (We will buy more coffee from it):

```
1DtvkCh28zqarTEUHtxs7gWtutsv2Cnf9d
```
