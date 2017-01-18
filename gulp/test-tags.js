var chai = require('chai');
var expect = chai.expect;
var assert = require("assert");
var tags = require('./../tags.js');


describe('CartSummary', function() {
  it('getTags() should return tag keys', function() {
    var test_str = "I hate when people smoke e-cigarettes indoors. #annoying #rude #whygodwhy";
    var result = tags.getTags(test_str);
    result.should.containEql('annoying');
    result.should.containEql('rude');
    result.should.containEql('whygodwhy');
  });
});
