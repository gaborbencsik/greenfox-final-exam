var test = require('tape');
var unit = require('./11-1-unitTest.js');

// Test

test('two must be four', function(t) {
  t.equal(unit(2), 4);
  t.end()
});
