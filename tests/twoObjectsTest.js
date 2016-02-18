/*global Buffer: false, clearInterval: false, clearTimeout: false, console: false, exports: false, global: false, module: false, process: false, querystring: false, require: false, setInterval: false, describe: false, it: false, setTimeout: false, __filename: false, __dirname: false */

var assert = require("assert")
    , chai = require("chai")
    , _ = require("underscore")
    ;

describe('Two Objects Protocol', function () {
    it('should list the right protocol in the implementation.', function () {
        var testA = require('./mocks/twoObjects/a.js');
        var testB = require('./mocks/twoObjects/b.js');
        
        // are the properties set?
        // ------------------------------------------------------------
        chai.expect(testA).to.have.property(
            'confirmsToProtocols'
        );
        chai.expect(testA).to.have.property(
            'fulfillProtocols'
        );
        chai.expect(testB).to.have.property(
            'confirmsToProtocols'
        );
         chai.expect(testB).to.have.property(
            'fulfillProtocols'
        );

        // are the protocols fulfilled set?
        // ------------------------------------------------------------
        chai.expect(testA.confirmsToProtocols).to.have.length(1);
        chai.expect(testA.fulfillProtocols).to.be.true;
        chai.expect(testB.confirmsToProtocols).to.have.length(1);
        chai.expect(testB.fulfillProtocols).to.be.true;
        
        // are the right protocols are stored in names?
        // ------------------------------------------------------------
        chai.expect(_.first(testA.confirmsToProtocols)).to.be.equals('aProtocol');
        chai.expect(_.first(testB.confirmsToProtocols)).to.be.equals('bProtocol');
    });
    
});
