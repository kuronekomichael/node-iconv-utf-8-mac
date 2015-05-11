var assert = require('assert');
var Iconv = require('../lib/iconv').Iconv;
var Buffer = require('buffer').Buffer;

var iconv = new Iconv('UTF-8-MAC', 'UTF-8');
var buffer = iconv.convert('グラタン');
var buffer2 = iconv.convert(new Buffer('グラタン'));
assert.equal(buffer.inspect(), buffer2.inspect());
