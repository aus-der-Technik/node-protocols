/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, describe: false, it: false, setTimeout: false, __filename: false, __dirname: false */

var assert = require("assert")
    , chai = require("chai")
    ;

describe('Prototype Protocol', function () {
    it('should fail on a non full implementation.', function () {
        var test = require('./mocks/prototypes/implementationFalse.js');
        
        chai.expect(test).to.have.property(
            'confirmsToProtocols'
        );
         chai.expect(test).to.have.property(
            'fulfillProtocols'
        );
        chai.expect(test.confirmsToProtocols).to.have.length(1);
        chai.expect(test.fulfillProtocols).to.be.false;
    });
    
    it('should succeed on a full implementation.', function () {
        
        var test = require('./mocks/prototypes/implementation.js');
        
        chai.expect(test).to.have.property(
            'confirmsToProtocols'
        );
         chai.expect(test).to.have.property(
            'fulfillProtocols'
        );
        chai.expect(test.confirmsToProtocols).to.have.length(1);
        chai.expect(test.fulfillProtocols).to.be.true;
    });
});
