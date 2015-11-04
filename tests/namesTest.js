var assert = require("assert")
    , chai = require("chai")
    , _ = require("underscore")
    ;
;

describe('Implementation', function () {
    it('should return the protocol name.', function () {

        var test = require('./mocks/5/implementation.js');
        
        chai.expect(test).to.have.property(
            'confirmsToProtocols'
        );

        chai.expect(test.confirmsToProtocols).to.have.length(1);
        chai.expect(_.first(test.confirmsToProtocols)).to.be.equal('protocol');
    });
});

 