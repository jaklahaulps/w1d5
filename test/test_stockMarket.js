var assert = require("chai").assert;
var test = require("../stockMarket/stockMarket");

describe("Stock market", function(){
  it("should return value of 16 if 45, 24, 35, 31, 40, 38, 11 is input", function(){
    var array = [45, 24, 35, 31, 40, 38, 11];
    var result = stockMarket(array);
    assert.isTrue(result);
  });
});