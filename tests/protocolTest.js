var assert = require("assert")
    , chai = require("chai")
;

describe('Protocol', function () {
    it('should fail on a non full implementation.', function () {
        var test = require('./mocks/1/implementation.js');
        
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
        
        var test = require('./mocks/2/implementation.js');
        
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

describe('Tow protocols', function () {
    it('should fail on a non full implementation.', function () {
        var test = require('./mocks/3/implementation.js');
                
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
        var test = require('./mocks/4/implementation.js');
        
        chai.expect(test).to.have.property(
            'confirmsToProtocols'
        );
         chai.expect(test).to.have.property(
            'fulfillProtocols'
        );
        chai.expect(test.confirmsToProtocols).to.have.length(2);
        chai.expect(test.fulfillProtocols).to.be.true;
    });
});
 