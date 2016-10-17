/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, describe: false, it: false, setTimeout: false, __filename: false, __dirname: false */

var assert = require("assert")
    , chai = require("chai")
    ;

describe('Undefined in Protocol', function () {
    it('should fullfill on Objects.', function () {
        var test = require('./mocks/undefined/implementation_1.js');
        
        chai.expect(test).to.have.property(
            'confirmsToProtocols'
        );
         chai.expect(test).to.have.property(
            'fulfillProtocols'
        );
        chai.expect(test.confirmsToProtocols).to.have.length(1);
        chai.expect(test.fulfillProtocols).to.be.true;
    });
    it('should fullfill on String.', function () {
        var test = require('./mocks/undefined/implementation_2.js');
        
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
