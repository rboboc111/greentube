var expect  = require('chai').expect;
var request = require('request');

it('Main page status', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Main page content', function(done) {
    request('http://localhost:8080' , function(error, response, body) {
        expect(body).to.equal('Hello World');
        done();
    });
});
