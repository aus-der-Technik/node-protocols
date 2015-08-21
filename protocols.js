/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, setTimeout: false, __filename: false, __dirname: false */

var _ = require('underscore');

var protocols = {
      protocolNames: []
    , isValid: false
    , implement: function(clazz, protocols, breakOnError){
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
                        return true;
                    }
                }
                if(breakOnError != false){
                    throw new Error("Module does not confirm protocol "+ protocol);
                }
                return false;
            });
            var c = _.every( p );
            return c;
        });
        var c = _.every( p );

        that.protocolNames = _.compact( p );
        if(c){
            that.isValid = true;
        }
        return c;
    }
};
module.exports = protocols;

// Returns a list of valid implanted protocols
Object.defineProperty(Object.prototype, 'confirmsToProtocols', {
  set: function(){},
  get: function(){
    return protocols.protocolNames || [];
  },
  configurable: true
});

// Boolean value that indicated if the model is fulfilling all protocols.
Object.defineProperty(Object.prototype, 'fulfillProtocols', {
  set: function(){},
  get: function(){
    return protocols.isValid;
  },
  configurable: true
});



