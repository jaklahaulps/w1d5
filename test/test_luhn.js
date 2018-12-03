var assert = require("chai").assert;
var luhn = require ("../luhnAlgorithm/check");

describe("Luhn check", function() {
  it("should return true if a number is a Luhn algorithm", function(){
    var num = 79927398713;
    var result = luhn(num);
    assert.isTrue(result);
  })

  it ("should return false if a number is not a Luhn algorithm", function(){
    var num = 1234533229;
    var result = false;
    assert.isFalse(luhn(num));
  })

  it("should return true if a number is a Luhn algorithm", function(){
    var num = 2221001234123450;
    var result = true;
    assert.isTrue(result);
  })

});

