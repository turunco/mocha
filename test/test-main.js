//
// SA) https://mochajs.org/#bdd
//
var assert = require('assert');
var Main = require('../js/main.js').Main;


// called once
before(() => {
    console.log('before');
});
after(() => {
    console.log('after');
});


// called each 'it'
beforeEach(() => {
    console.log('beforeEach');
});
afterEach(() => {
    console.log('afterEach');
});


describe('class Main', function() {
    describe('makeMessage_', function() {

        it('test 0', () => {
            var main = new Main();
            assert.equal('Hello, ', main.makeMessage_(''));
        });

        it('test 1', () => {
            var main = new Main();
            assert.equal('Hello, World!', main.makeMessage_('World!'));
        });

        // specify() is alias for it()
        specify('test 2', () => {
            var main = new Main();
            assert.equal('Hello, 123', main.makeMessage_(123));
        });
    });
});

// context is alias for describe
context('class Main test2', () => {
    it('test 0', () => {
        assert.equal(1, 1);
    });
});