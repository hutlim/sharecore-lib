'use strict';

var should = require('chai').should();
var sharecore = require('../');

describe('#versionGuard', function() {
  it('global._sharecore should be defined', function() {
    should.equal(global._sharecore, sharecore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      sharecore.versionGuard('version');
    }).should.throw('More than one instance of sharecore');
  });
});
