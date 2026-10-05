const assert = require("node:assert/strict");
const caseConverter = require("./index");

assert.strictEqual(
    caseConverter.getUpperCase("hello free Code Camp!"),
    "HELLO FREE CODE CAMP!",
);

assert.strictEqual(
    caseConverter.getLowerCase("hello free Code Camp!"),
    "hello free code camp!",
);

assert.strictEqual(
    caseConverter.getProperCase("Hello Free Code Camp!"),
    "Hello Free Code Camp!",
);

assert.strictEqual(
    caseConverter.getSentenceCase("hello free Code Camp!"),
    "Hello free code camp!",
);