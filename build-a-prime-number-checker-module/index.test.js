const assert = require("node:assert/strict");
const {isPrime} = require("./index");

assert.strictEqual(isPrime(2), true);
assert.strictEqual(isPrime(3), true);
assert.strictEqual(isPrime(4), false);
assert.strictEqual(isPrime(5), true);
assert.strictEqual(isPrime(7), true);
assert.strictEqual(isPrime(9), false);
assert.strictEqual(isPrime(17), true);
assert.strictEqual(isPrime(20), false);

console.log("All test Passed");