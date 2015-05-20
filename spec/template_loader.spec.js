var mockery = require('mockery');

describe('templateLoader', function(){

    var templateLoader,
        fsMock;

    beforeEach(function(){

        fsMock = {
            readDir: function(__, callback){
                callback(null, ['foo', 'bar']);
            },
            readFile: function(__, callback){
                callback(null, '<p>{{someStuff}}</p><div>Foo!</div>');
            }
        };

        mockery.enable({
            warnOnReplace: false,
            warnOnUnregistered: false
        });

        mockery.registerMock('fs', fsMock);
        templateLoader = require('../app_modules/template_loader.js');
    });

    afterEach(function(){
        mockery.disable();
    });

    it('should pass this test.', function(){
        expect(true).toBe(true);
    });

});
