var assert = require('assert');
var add = require('../src/index.js').add;

describe('add()', function() {
  it('should be rly good at math', async function() {
    const result = await add(1, 1);
    assert.equal(result, 2);
  });
});

describe('this starter proj', function() {
  it('should work ok with es6 because yea', function() {
    assert.doesNotThrow(function() {
      var x = () => 5;
      var y = `oh hai`;
    });
  });
});
