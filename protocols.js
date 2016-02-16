/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, setTimeout: false, __filename: false, __dirname: false */

/** @module node-protocols */

var _ = require('underscore')
    , path = require('path')
    , S = require('string')
    ;

/**
 * @class
 * <h2>a tiny implementation to fulfil protocols (Interfaces) in nodejs.</h2>

 * <h3>Description</h3>
 * A javascript object does not have any possibilities to implement a protocol (Interface) at 
 * language level. Well, that is very good in many ways, but get extrem unhandy when 
 * implementing a pluggable system. <b>node-protocols</B> is a tiny object extension 
 * to allow a class implements one or more protocols.
 *
 * <h3>Example</h3>
 * Create a myProtocol.js file:
 * <pre>
 * module.exports.foo = function(){};
 * module.exports.bar = function(){};
 * module.exports.s = String();
 * </pre>
 * <br />
 * Than implement a module like this:
 * <pre>
 * var impl = module.exports = {
 *    foo: function(){
 *       console.log("I am foo");
 *    }
 * }
 * </pre>
 * <br />
 * To confirm that this implementation confirms to a protocol, node-protocols is required.
 * <pre>
 * var protocol = require('node-protocols');
 * </pre>
 * <br />
 * Finally a member named "protocol" must be set in your implementation that defines 
 * the protocol: 
 * <pre>
 * module.exports.protocol = protocol.implement(impl, 'myProtocol.js')
 * </pre>
 * <br />
 */
var protocols = {
    /**
     * @var protocolNames
     * @description Holds the protocol names that should be implemented to the module
     */
    protocolNames: []

    /**
     * @var 
     * @description Holds the boolean indicator if the module fulfills all protocols
     */    
    , isValid: false
};

/**
 * @description Implement registers one ore more protocols to a object. 
 * 
 * @public
 * @param module {Object} Module that implements a protocol
 * @param protocols {Array|String} List of protocol names or Single protocol name 
 *                                 that are implemented
 * @param break {Boolean} Optional flag that indicates when the script execution should
 *                                 stops when a protocol is not completely implemented
 */
protocols.implement =  function(clazz, protocols, breakOnError){
    var that = this;
    that.protocolNames = [];
    that.isValid = false;   
    if( typeof protocols === 'string' ){
        protocols = [protocols];
    }
    var p = _.map(protocols, function(protocol){
        var m = require(protocol);
        var p = _.map(_.keys(m), function(e){
            if( _.has(clazz, e)  ){
                if( typeof clazz[e] === typeof m[e] ){
                    return S(path.basename(protocol)).chompRight(path.extname(protocol)).s;
                }
            }
            if(breakOnError != false){
                throw new Error("Module does not confirm protocol "+ protocol);
            }
            return false;
        });
        return {c: _.every( p ), n: _.unique(p)};
    });

    that.isValid = _.every( _.map(p, function(e){ return e.c; }) );
    //if(that.isValid){
        that.protocolNames =  _.compact(
            _.flatten(
                _.map(p, function(e){ return e.n; })
            )
        );
    //}
    return that.isValid;
}

module.exports = protocols;

/** 
 * @function confirmsToProtocols
 * @description Returns a list of the protocols that the implementation successfully 
 *              implements. 
 * 
 * <h4>Example</h4>
 * <pre>
 * console.log(myImpl.confirmsToProtocols);  // says: 'myProtocol'
 * </pre>
 */
Object.defineProperty(Object.prototype, 'confirmsToProtocols', {
  set: function(){},
  get: function(){
    return protocols.protocolNames || [];
  },
  configurable: true
});

/** 
 * @function fulfillProtocols
 * @description Returns a boolean indicator "true" if all protocols are successfully 
 *              implemented.
 * 
 * <h4>Example</h4>
 * <pre>
 * console.log(myImpl.fulfillProtocols);  // says: true
 * </pre>
 */
Object.defineProperty(Object.prototype, 'fulfillProtocols', {
  set: function(){},
  get: function(){
    return protocols.isValid;
  },
  configurable: true
});
